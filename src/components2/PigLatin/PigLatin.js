import React, { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

function PigLatin(props) {
  const [userText, setUserText] = useState("");
  const [output1, setOutput1] = useState("");
  const [userText2, setUserText2] = useState("");
  const [output2, setOutput2] = useState("");

  const convertWordVowel = (word) => {
    word = word + "-yay";
    return word;
  };

  const convertWordConsonant = (word) => {
    if (word === "," || word === "." || word === "!" || word === "?") {
      return ` ${word}`;
    }
    let lowerWord = word.toLowerCase();
    if (
      lowerWord[0] + lowerWord[1] === "th" ||
      lowerWord[0] + lowerWord[1] === "ch"
    ) {
      lowerWord =
        lowerWord.substr(2, lowerWord.length - 1) +
        "-" +
        lowerWord[0] +
        lowerWord[1] +
        "ay";
    } else {
      lowerWord =
        lowerWord.substr(1, lowerWord.length - 1) + "-" + lowerWord[0] + "ay";
    }
    if (word[0] !== word[0].toLowerCase()) {
      lowerWord =
        lowerWord[0].toUpperCase() + lowerWord.substr(1, lowerWord.length - 1);
    }
    return lowerWord;
  };

  const convertWord = (word) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(word[0].toLowerCase())
      ? convertWordVowel(word)
      : convertWordConsonant(word);
  };

  const convertSentence = (convertWord, sentence) => {
    // next 7 lines are an ugly way of fixing punctuation
    sentence = sentence
      .split(",")
      .join(" , ")
      .split("!")
      .join(" ! ")
      .split("?")
      .join(" ? ")
      .split(".")
      .join(" . ")
      .split("  ")
      .join(" ");
    if (sentence[sentence.length - 1] === " ") {
      sentence = sentence.substr(0, sentence.length - 1);
    }
    sentence = sentence.split(" ");
    let newSentence = sentence.map((word) => convertWord(word));
    return newSentence.join(" ").split("  ").join("");
  };

  //#region --------------------------------------Advanced--------------------------------------
  const decypherWordVowel = (word) => {
    return word.substr(0, word.length - 4);
  };

  const decypherWordConsonant = (word) => {
    if (word === "," || word === "." || word === "!" || word === "?") {
      return ` ${word}`;
    }
    let lowerWord = word.toLowerCase();
    if (
      lowerWord[lowerWord.length - 4] + lowerWord[lowerWord.length - 3] ===
        "th" ||
      lowerWord[lowerWord.length - 4] + lowerWord[lowerWord.length - 3] === "ch"
    ) {
      lowerWord =
        lowerWord[lowerWord.length - 4] +
        lowerWord[lowerWord.length - 3] +
        lowerWord.substr(0, lowerWord.length - 5);
    } else {
      lowerWord =
        lowerWord[lowerWord.length - 3] +
        lowerWord.substr(0, lowerWord.length - 4);
    }
    if (word[0] !== word[0].toLowerCase()) {
      lowerWord =
        lowerWord[0].toUpperCase() + lowerWord.substr(1, lowerWord.length - 1);
    }
    return lowerWord;
  };

  const decypherWord = (word) => {
    return word.substr(word.length - 3, word.length - 1) === "yay"
      ? decypherWordVowel(word)
      : decypherWordConsonant(word);
  };
  //#endregion --------------------------------------Advanced--------------------------------------

  //#region --------------------------------------Unit Tests--------------------------------------
  const unitTest = (funct, functString, word, expected) =>
    console.assert(
      funct(word) === expected,
      `expected ${functString}"${word}") to equal "${expected}", instead got: "${funct(
        word
      )}"`
    );

  const unitTest2 = (funct1, funct2, functString, word, expected) =>
    console.assert(
      funct1(funct2, word) === expected,
      `expected ${functString}"${word}") to equal "${expected}", instead got: "${funct1(
        funct2,
        word
      )}"`
    );

  useEffect(() => {
    unitTest(convertWordVowel, "convertWordVowel(", "oar", "oar-yay");
    unitTest(convertWordVowel, "convertWordVowel(", "Oar", "Oar-yay");
    unitTest(convertWordConsonant, "convertWordConsonant(", "pig", "ig-pay");
    unitTest(
      convertWordConsonant,
      "convertWordConsonant(",
      "chair",
      "air-chay"
    );
    unitTest(convertWordConsonant, "convertWordConsonant(", "Pig", "Ig-pay");
    unitTest(convertWord, "convertWord(", "Oar", "Oar-yay");
    unitTest(convertWord, "convertWord(", "pig", "ig-pay");
    unitTest2(
      convertSentence,
      convertWord,
      "convertSentence(convertWord, ",
      "I eat bagels",
      "I-yay eat-yay agels-bay"
    );
    unitTest2(
      convertSentence,
      convertWord,
      "convertSentence(convertWord, ",
      "Never have I ever, eaten a bagel",
      "Ever-nay ave-hay I-yay ever-yay, eaten-yay a-yay agel-bay"
    );
    unitTest(decypherWordVowel, "decypherWordVowel(", "oar-yay", "oar");
    unitTest(decypherWordVowel, "decypherWordVowel(", "Oar-yay", "Oar");
    unitTest(decypherWordConsonant, "decypherWordConsonant(", "ig-pay", "pig");
    unitTest(
      decypherWordConsonant,
      "decypherWordConsonant(",
      "air-chay",
      "chair"
    );
    unitTest(decypherWordConsonant, "decypherWordConsonant(", "Ig-pay", "Pig");
    unitTest(decypherWord, "decypherWord(", "oar-yay", "oar");
    unitTest(decypherWord, "decypherWord(", "Oar-yay", "Oar");
    unitTest2(
      convertSentence,
      decypherWord,
      "convertSentence(decypherWord, ",
      "I-yay eat-yay agels-bay",
      "I eat bagels"
    );
    unitTest2(
      convertSentence,
      decypherWord,
      "convertSentence(decypherWord, ",
      "Ever-nay ave-hay I-yay ever-yay, eaten-yay a-yay agel-bay",
      "Never have I ever, eaten a bagel"
    );
  });
  //#endregion --------------------------------------Unit Tests--------------------------------------

  return (
    <span>
      <h1>
        <u>Intermediate</u>
      </h1>
      <div>
        Type a sentence below and then click submit to convert it to pig latin:
      </div>
      <InputGroup>
        <Form.Control
          type="text"
          name="userText"
          placeholder="type sentence here"
          aria-describedby="inputGroupPrepend"
          required
          value={userText}
          onChange={(event) => setUserText(event.target.value)}
        />
        <Button
          onClick={() => setOutput1(convertSentence(convertWord, userText))}
        >
          Submit
        </Button>
      </InputGroup>
      <div style={{ border: "5px solid #355e3b", borderRadius: "10px" }}>
        Results: {output1}
      </div>
      <h1>
        <u>Advanced</u>
      </h1>
      <div>
        Type a sentence in pig latin below or copy the previous result using the
        "Copy" button and then click submit to convert it to english:
      </div>
      <InputGroup>
        <Button onClick={() => setUserText2(output1)}>Copy</Button>
        <Form.Control
          type="text"
          name="userText"
          placeholder="type sentence here"
          aria-describedby="inputGroupPrepend"
          required
          value={userText2}
          onChange={(event) => setUserText2(event.target.value)}
        />
        <Button
          onClick={() => setOutput2(convertSentence(decypherWord, userText2))}
        >
          Submit
        </Button>
      </InputGroup>
      <div style={{ border: "5px solid #355e3b", borderRadius: "10px" }}>
        Results: {output2}
      </div>
    </span>
  );
}

export default PigLatin;
