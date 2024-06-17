https://teachablemachine.withgoogle.com/models/hs9ZHkuQU/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });

camera = document.getElementById("camera");

Webcam.attach( '#camera' )

function take_snapshot()
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+ '"/>';
});
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WXPQGRCL2/model.json', modelLoded);
function modelLoded() {
console.log('Model Loaded!');
}

function check()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult)  
}

function gotResult(error, results)
{
    if (error) {
    console.error(error);
    } else {
    console.log(results);
    document.getElementById("result_hand_gesture_name").innerHTML= results[0].label    
    document.getElementById("result_hand_gesture_name2").innerHTML= results[1].label
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "This looks amazing")
        {
        document.getElementById("update_gesture").innerHTML="&#128076;";
        }
    if(results[0].label == "All the best")
        {
        document.getElementById("update_gesture").innerHTML="&#128077;";    
        }
        
    if(results[0].label == "That was a marvelous victory")
        {
        document.getElementById("update_gesture").innerHTML="&#9996;";    
        }

        if(results[1].label == "This looks amazing")
            {
            document.getElementById("update_gesture").innerHTML="&#128076;";
            }
        if(results[1].label == "All the best")
            {
            document.getElementById("update_gesture").innerHTML="&#128077;";    
            }
            
        if(results[1].label == "That was a marvelous victory")
            {
            document.getElementById("update_gesture").innerHTML="&#9996;";    
            }      
        }
    }  
function speak(){
var synth = window.speechSynthesis;
speak_data_1 = "The first prediction is " + prediction_1;
speak_data_2 = "And the second prediction is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}