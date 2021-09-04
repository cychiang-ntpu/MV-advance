AFRAME.registerComponent('generatefloor', {
    // for pool obj container
    schema: {
        pool: {
            type: 'string'
        },
        zoffset: {
            default: 0
        }
    },

    init: function () {
        this.start = false;

        this.el.sceneEl.addEventListener('start', ()=>{
            //generate floor
            this.gen();

            //set start
            this.start = true;
        });
    },

    tick: function (time, timeDelta) {

        
        //count on start
        if (this.start) {
            this.startTime = time;
            this.start = false;
        }

        //TODO: check if time passsss
        if (/*this.start == true && */ (time-this.startTime)>3000) {
            //TODO: change position here
            let pos = this.el.getAttribute('position');
            pos.z += 0.05;
            if(pos.z>=5) {
                pos.z = 0;
            }
            //console.log(pos);
            this.el.setAttribute('position', pos);
        }
    },

    gen: function() {

        let planepool = this.el.sceneEl.components.pool__plane;
        // or
        // let planepool = this.el.sceneEl.components['pool__plane'];

        for(let i=0; i<30; i++){
            setTimeout(()=>{
                let el = planepool.requestEntity();
                el.setAttribute('position', '0 0 '+(i*-1));
                el.play();
            }, i*200);
        }
        for(let i=0; i<30; i++){
            setTimeout(()=>{
                let el = planepool.requestEntity();
                el.setAttribute('position', '-3 0 '+(i*-1));
                el.play();
            }, i*200);
        }
    }
});
