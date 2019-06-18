let timeSignatureList = [];

function playLine ( line ) 
{
    let audio = new Audio ( line );
    audio.play ();   
}

function executePhase ( phase ) 
{
    // Phase 1 has an intro
    if ( phase === 1 )
    {
        playLine ( introLine );
        setTimeout ( function () { 
            executePhaseLines ( phase );           
        }, 14000 );
    }
    else
    {
        executePhaseLines ( phase );
    }
}

function executePhaseLines ( phase ) 
{
    // Choose a random line for the current phase
    let phaseLine = phaseLines [ phase - 1 ] [ Math.floor ( Math.random () * phaseLines [ phase - 1 ].length ) ];

    playLine ( phaseLine );

    setTimeout ( function () 
    {
        if ( phase === 3 )
        {
            let timeSignatureLine1 = getTimeSignatureLine ();
            let timeSignatureLine2 = getTimeSignatureLine ();
            playLine ( nextNumberPhase3Line );
            setTimeout ( function () {
                playLine ( timeSignatureLine1 );
                setTimeout ( function () {
                    playLine ( plusLine );
                    setTimeout ( function () {                       
                        playLine ( timeSignatureLine2 );
                    }, 1000 );
                }, 1000 );
            }, 8500 );
        }
        else if ( phase === 4 )
        {
            // Could do some cool stuff at the end, this is here to be expanded upon later
            console.log ( timeSignatureList );
            document.getElementById ( "phase-4" ).disabled = true;
            return;
        }
        else
        {
            playLine ( nextNumberLine );
            let timeSignatureLine = getTimeSignatureLine ();
            setTimeout ( function () {
                playLine ( timeSignatureLine );
            }, 8500);
        }

        // Disable the current phase's button, enable the next one
        document.getElementById ( "phase-" + phase ).disabled = true;
        document.getElementById ( "phase-" + ( phase + 1 ) ).disabled = false;
        console.log ( "=================== END PHASE " + phase + " ===================");
    }, 8000 );
}

function getTimeSignatureLine () 
{
    // Choose a random time signature (this is the essence of the whole thing)
    let timeSignature = Math.floor ( Math.random () * timeSignatureLines.length );

    let timeSignatureLine = timeSignatureLines [ timeSignature ];

    // Record the time signature for later
    timeSignatureList.push ( timeSignatureLine );

    // Remove the time signature so we don't repeat
    timeSignatureLines.splice ( timeSignature, 1 );

    return timeSignatureLine;
}

/***********************************************************************/

let timeSignatureLines =
[
    "three.wav",
    "four.wav",
    "five.wav",
    "six.wav",
    "seven.wav",
    "nine.wav",
    "eleven.wav",
    "thirteen.wav"
];

const phaseLines = 
[
    [
        "phase_1_test.wav"
        // "phase_1_0.wav",
        // "phase_1_1.wav",
        // "phase_1_2.wav",
        // "phase_1_3.wav"
    ],
    [
        "phase_2_test.wav"
        // "phase_2_0.wav",
        // "phase_2_1.wav",
        // "phase_2_2.wav",
        // "phase_2_3.wav",
    ],
    [
        "phase_3_test.wav"
        // "phase_3_0.wav",
        // "phase_3_1.wav",
        // "phase_3_2.wav",
        // "phase_3_3.wav",
    ],
    [
        "phase_4_test.wav"
        // "phase_end_0.wav",
        // "phase_end_1.wav",
        // "phase_end_2.wav",
        // "phase_end_3.wav",
    ]
];

const introLine = "intro.wav";
const plusLine = "plus.wav";
const nextNumberLine = "next_number.wav";
const nextNumberPhase3Line = "next_number_phase_3.wav";