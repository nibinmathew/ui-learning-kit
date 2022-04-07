//interaction functions
//get all the controls

const audioplayerB=document.querySelector(".audio-backgrount");
const audioplayerC=document.querySelector(".audio-change");
const heading=document.querySelector(".h1");
const discriptionbox=document.querySelector(".discription");
const editBox=document.querySelector(".editbox");
const language=document.querySelector(".language");
const editCombo=document.querySelector(".editcombo");
const slider=document.querySelector(".slider").value;
const button=document.querySelector(".button");
const buttonMessage=document.querySelector(".buttonMessage");
const radiobuttons=document.querySelector(".radiobuttons");
const checkbox=document.querySelector(".checkbox");
const link=document.querySelector(".link");
const treeview=document.querySelector(".deque-tree");


//audio transcripts for ui elements.
const displayDiscription={
editboxDis: "Hi I am edit box",

comboboxDis: "hi I am combo box",
editcomboDis: "I am edit combo, will be visible a small box on the screen",
sliderDis: "I am slider",
buttonDis: "I am button",
radiobuttonDis: "I am radio button",
checkboxDis: "I am check box",
listDis: "I am list box",
linkDis: "I am link",
treeviewDis: "Iam tree view",
}

document.addEventListener("keydown", function(e){
    let currentElement=document.activeElement.id;    
    if (e.keyCode==9) {
audioplayerC.setAttribute('src', "Program Files/sounds/change.wav");
audioplayerC.volume=0.5;
audioplayerC.play();
            }
                if (e.keyCode==17) {


            switch(currentElement){
                case "editbox":
    startAudio("editbox", displayDiscription.editboxDis)
        break;
    case "language":
        startAudio("combobox",displayDiscription.comboboxDis);
        break;
    case "editcombo":
    startAudio("editcombo", displayDiscription.editcomboDis);
            break;
        case "slider":
    startAudio("slider", displayDiscription.sliderDis);
            break;
            case "button":
                startAudio("button", displayDiscription.buttonDis);
                break;                        
    case "list":
        startAudio("list",displayDiscription.listDis);
        break;
        case "link":
            startAudio("link", displayDiscription.linkDis);
            break;
            case "deque-tree-no-select":
                startAudio("treeview", displayDiscription.treeviewDis);
                break;
                case 'radiobuttons':
                    startAudio("radiobuttons", "radiobutton selected");
                    break;
                    case 'checkbox':
                        startAudio('checkbox', 'checkbox selected');
                        break;
        default:
            startAudio("default", "press a valid key");
        }//end of switch
    }//end of if
        
    });

//audio slider 
function setVolume(v){
    audioplayerB.volume=v;
}

window.onload=function(){
    heading.focus();
    if(heading.id==document.activeElement){
        audioplayerB.play();
    }
}

//setting discription and audio location and playing audio.
function startAudio(uiName, textDiscription,){
    discriptionbox.textContent=textDiscription;
    audioplayerC.setAttribute('src',`Program Files/Audio Discriptions/${uiName}.wav`);
    audioplayerC.play();
    }
    
    function okFunction(){
buttonMessage.textContent="Great, You have pressed the button!";
    }
    