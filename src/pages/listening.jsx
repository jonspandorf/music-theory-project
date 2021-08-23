import { useEffect } from "react";
import { useState } from "react"
import { Notation } from 'react-abc';
import * as Tone from 'tone'


const Listening = () => {
    const [intSize, setIntSize] = useState(0)
    let counter = 0;

    const directions = ['up', 'down']
    const intTypes = ['minor', 'Major', 'diminished', 'Augmented']
    const intSizeList = [1, 2, 3, 4, 5, 6, 7, 8]
    const AMinorScale = ['A', 'B', 'C', 'D', 'E', 'F', 'G']


    const exerNotes = ["A4", "G4", "D4", "F#4", "E4"]

    let notes = "";

    const notation = `X:1\n\C:Jon\nM:4/4\nQ:1/4=88\n%%staves {V1}\nV: V1 clef=treble\n[V: V1] ${exerNotes}`
    let time = 0;

    useEffect(()=> {
        console.log(notes)
        if (notes) {
            console.log(notation)
        }
    }, [notes])


    const render = (time) => {
        console.log('rendering')

        if (counter - exerNotes.length - 1) {
            synth.triggerAttackRelease(exerNotes[counter], "4n", time)
            counter++;
        } else {
            Tone.Transport.stop();
        }

    }
    const mapped = [];

    const addOctaveNumbers = (scale, octaveNumber) => {
        scale.forEach(note => {
            const firstOctaveNoteIndex = scale.indexOf('C') !== -1 ? scale.indexOf('C') : scale.indexOf('C#');
            const noteOctaveNumber = scale.indexOf(note) < firstOctaveNoteIndex ? octaveNumber - 1 : octaveNumber; 
            const noteToReturn = `${note}${noteOctaveNumber}`
            mapped.push(noteToReturn)
        })
    }



    const synth = new Tone.Synth().toDestination();

    addOctaveNumbers(AMinorScale, 4);

    exerNotes.forEach((note, index) => {
        synth.triggerAttackRelease(note, '4n', index + 1)
    })


    const handleDrill = () => {
        // Tone.Transport.bpm.value = 60;
        // Tone.Transport.timeSignature = 4;
        // for (let i = 0; i < exerNotes.length; i++) {
        //     Tone.Transport.scheduleOnce((time) => {
        //         synth.triggerAttackRelease(exerNotes[i], "8n", time) 
        //     }, "2n")
        // }
        Tone.Transport.bpm.value = 150

        console.log('start')
        console.log(Tone.Transport.state)
        if (Tone.Transport.state !== 'started') {
            Tone.start();
          } else {
            Tone.Transport.stop();
          }
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