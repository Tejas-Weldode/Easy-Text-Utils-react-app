import React, { useState } from 'react'

export default function TextArea(props) {

    let altmode = props.mode === "light" ? "dark" : "light";

    const [text, changetext] = useState("Sample text");

    const HandleOnchange = (event) => {
        changetext(event.target.value);
    }

    const Uppercase = () => {
        changetext(text.toUpperCase());
    }
    const Lowercase = () => {
        changetext(text.toLowerCase());
    }
    const Capitalize = () => {
        let newtextarray = text.split(" ");
        let newtext = "";
        newtextarray.forEach((element, index) => {
            const lower = element.toLowerCase();
            let first = element.charAt(0);
            element = first.toUpperCase() + lower.slice(1);
            if (index === newtextarray.length - 1) {
                newtext = newtext + element;
            }
            else {
                newtext = newtext + element + " ";
            }
        })
        changetext(newtext);
    }
    const Clear = () => {
        changetext("");
    }
    const Copy = () => {
        let copiedtext = document.getElementById("Textarea").value;
        navigator.clipboard.writeText(copiedtext);
        props.add_alert_content("Copied to clipboard","info");
    }

    let wordCount = text.split(/\s+/).length;
    if (text[text.length - 1] === " " || text.length === 0) {
        wordCount = wordCount - 1;
    }

    return (
        <div className="container">

            <div className="my-4">
                <textarea className={`form-control text-${altmode} bg-${props.mode}`} value={text} id="Textarea" rows="5" onChange={HandleOnchange}></textarea>
            </div>

            <h4 className={`my-4 text-${altmode}`}>Choose an action</h4>
            
            <button type="button" className={`btn btn-outline-${altmode} me-3 my-2`} onClick={Uppercase}>Change to Upper Case</button>
            <button type="button" className={`btn btn-outline-${altmode} me-3 my-2`} onClick={Lowercase}>Change to Lower Case</button>
            <button type="button" className={`btn btn-outline-${altmode} me-3 my-2`} onClick={Capitalize}>Capitalize</button>
            <button type="button" className={`btn btn-outline-${altmode} me-3 my-2`} onClick={Clear}>Clear</button>
            <button type="button" className={`btn btn-outline-${altmode} me-3 my-2`} onClick={Copy}>Copy</button>

            <div className="card text-light bg-secondary my-4">
                <div className="card-body">
                    <h5 className="card-title">Your text summary</h5>
                    <p>{wordCount} words, {text.length} characters, {text.split(" ").length / 250} minutes read</p>
                    <h6>Preview</h6>
                    <p>{text}</p>
                </div>
            </div>

        </div>
    )
}
