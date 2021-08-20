import { useEffect } from "react";
import { useState } from "react"
import { Notation } from 'react-abc';
import * as Tone from 'tone'


const Listening = () => {
    const [intSize, setIntSize] = useState(0)

    const directions = ['up', 'down']
    const intTypes = ['minor', 'Major', 'diminished', 'Augmented']
    const intSizeList = [1, 2, 3, 4, 5, 6, 7, 8]

    const exerNotes = ["A4", "G4", "D4", "F#4", "E4"]

    let notes = "";

    const notation = `X:1\n\C:Jon\nM:4/4\nQ:1/4=88\n%%staves {V1}\nV: V1 clef=treble\n[V: V1] ${exerNotes}`
    let time = 0;

    useEffect(()=> {
        console.log(notation)
        console.log(notes)
        if (notes) {
            console.log(notation)
        }
    }, [notes])

    const handleDrill = () => {
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        exerNotes.forEach(note => {
            synth.triggerAttackRelease(note, "8n", now + time);
            time = time + 0.5;
            notes = notes + note + ' ';
        })
    }

    const chooseIntSize = (e) => {
        e.preventDefault();

    }

    const checkIntSizeStatus = (size) => {
        // TODO
    }




    return (
        <>
        <div className="d-flex justify-content-center">
            <h4>Here there will be directions for the exercise</h4>
        </div>
        <div>
            <button className="btn btn-success" onClick={handleDrill}>Play Excersise &#9654;</button>
        </div>
        <div className="d-flex w-100 border border-primary justify-content-center">
            <Notation notation={notation}/>
        </div>
        <form onSubmit={handleDrill}>
            <div className="d-flex">
                <div className="row m-2">Direction
                    {directions.map((direction, i) => {
                     return(
                        <div className="row" key={i}>
                            <input type="checkbox" className="btn-check" id="btn-check"  autoComplete="off" />    
                            <label class="btn btn-primary m-2" htmlFor="int-type" >{direction}</label> 
                        </div>)
                    })}
                </div>
            
                <div className="row m-2">Interval Type
                    {intTypes.map((type, i) => {
                        return (
                            <>
                                <input type="checkbox" className="btn-check" id="btn-check" autocomplete="off" key={i}/>    
                                <label class="btn btn-warning m-1" htmlFor="int-type">{type}</label> 
                            </>
                        )
                    })}
                </div>
                <div className="row m-2">Interval Size
                    {intSizeList.map((size, i) => {
                        return (
                        <button key={i} className="btn btn-danger m-1" onClick={setIntSize}>{size}</button>
                        )
                    })}
                </div>
            </div>
        </form>
        </>
    )
}

export default Listening