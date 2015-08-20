function AutoComplete(config) {
    this.srcNode = config.srcNode;
    this.choices = config.choices;
    this.selection = -1;
}

AutoComplete.prototype = {
    DROPDOWN_TEMPLATE: '<ul class="item-list hidden"></ul>',

    render: function () {
        this._dropdown = appendHtml(this.srcNode.parentNode, this.DROPDOWN_TEMPLATE)[0];


        var self = this;
        this.srcNode.addEventListener(
            'keydown',
            function (evt) {
                var keycode = evt.keyCode;

                if(keycode === 40){ //down arrow
                    self.selectItem(++self.selection % self._dropdown.childNodes.length);
                    return;
                }
                if(keycode === 38){ //up arrow
                    self.selection --;

                    if(self.selection <0 ){
                        self.selection = self._dropdown.childNodes.length-1
                    }
                    self.selectItem(self.selection);
                    return;
                }
                var valid =
                    (keycode > 47 && keycode < 58)   || // number keys
                    (keycode > 64 && keycode < 91);    // letter keys

                if(valid) {
                    self.processInput(this.value + String.fromCharCode(evt.keyCode));
                }
                else{
                    self.processInput(this.value);
                }
            }
        );



    },

    processInput: function(input){
        var self = this;
        while (this._dropdown.firstChild) {
            this._dropdown.removeChild(this._dropdown.firstChild);
        }
        var matches = [];
        this.choices.forEach(function(choice){
           if(choice.toLowerCase().indexOf(input.toLowerCase())> -1){
               matches.push(choice);
           }
        });

        if(matches.length > 0){
            matches.forEach(
                function(m, index){
                    var li = '<li class="item">'+m + '</li>';
                    var liNode = appendHtml(this._dropdown, li)[0];
                    liNode.addEventListener('mouseenter', function(e){
                        self.selectItem(index);
                    });
                    liNode.addEventListener('mousedown', function(e){
                       self.srcNode.value = m;
                        self._dropdown.classList.add('hidden');
                    });

                },
                this
            );
            this._dropdown.classList.remove('hidden');
        }
        else if(!this._dropdown.classList.contains('hidden')){
            this._dropdown.classList.add('hidden');
        }
    },

    selectItem: function(index){
        var children = this._dropdown.childNodes;
        for(var i = 0; i < children.length; i++){
            if(i === index){
                if(!children[i].classList.contains('selected')){
                    children[i].classList.add('selected')
                }
            }
            else {
                children[i].classList.remove('selected');
            }
        }
    }


};

function appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    var ret = [];
    while (div.children.length > 0) {
        ret.push(el.appendChild(div.children[0]));
    }
    return ret;
}