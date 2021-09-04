AFRAME.registerComponent('analysereffect', {
    schema: {
        analyser: { type: 'selector' },
    },
    
    init: function () {
        let = firstcamera = document.getElementById("#firstcamera");
        let = secondcamera = document.getElementById("#secondcamera");
        this.data.analyser.addEventListener('audioanalyser-beat-high',() => {
            //TODO: add event listener
            console.log('beat!');
            secondcamera.setAttribute('camera', 'active', true);
            firstcamera.setAttribute('camera', 'active', false);
            setTimeout(()=>{
                secondcamera.setAttribute('camera', 'active', false);
                firstcamera.setAttribute('camera', 'active', true);
            }, 300)

        });
    },

    tick: function (time, timeDelta) {
        // let analyser = this.data.analyser;
        // let analysercomp = analyser.components.audioanalyser;
        // if(analysercomp) {
        //     let volumn = analysercomp.volumn / 100;
        //     //console.log(volumn);
        //     this.el.setAttribute('intensity', volumn);
        // }
    }
});
