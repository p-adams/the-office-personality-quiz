

var answers = [];

var doesContain = (answer) => {
    return answers.indexOf(answer) != -1 ? true : false
}

var perOne = function(){
    if(doesContain('Two') && doesContain('Six') && doesContain('Nine')
        && doesContain('Thirteen') && doesContain('Seventeen')){
        return true;
     }
     else{
         return false;
     }
}

var perTwo = function(){
    if(doesContain('Three') && doesContain('Seven') && doesContain('Ten')
        && doesContain('Fifteen') && doesContain('Twenty')){
        return true;
     }
     else{
         return false;
     }
}

var perThree = function(){
     if(doesContain('Four') && ((doesContain('Five') || doesContain('Eight')
        || doesContain('Seven')))
        && doesContain('Eleven')
        && doesContain('Sixteen') && doesContain('Eighteen')){
        return true;
     }
     else{
         return false;
     }
}

 var perFour = function(){
     if(doesContain('One') && ((doesContain('Seven') || doesContain('Eight')))
        && ((doesContain('Nine') || doesContain('Twelve')))
        && doesContain('Fourteen') && doesContain('Nineteen')){
            return true;
        }
        else{
            return false;
        }
 }

Home = Vue.extend({
    name: 'Home',
    template: "#start",
    data: function(){
        return {title: 'Who are you in The Office?'}
    },
   
    ready: function(){
        console.log(answers.length)
    }
    
})

One = Vue.extend({
    name: 'One',
    template: "#question-one",
    data: function(){
        return {picked: '', selected: false}
    },
    methods: {
        saveAnswer: function(pick){
            var selected = pick
            answers.push(selected)
            console.log(selected)
         },
         clicked: function(){
             this.selected = true;
         }
    }
})

Two = Vue.extend({
    name: 'Two',
    template: "#question-two",
     data: function(){
        return {picked: '', selected: false}
    },
    methods: {
        saveAnswer: function(pick){
            var selected = pick
            answers.push(selected)
            console.log(selected)
         },
         clicked: function(){
             this.selected = true;
         }
    }
})

Three = Vue.extend({
    name: 'Three',
    template: "#question-three",
     data: function(){
        return {picked: '', selected: false}
    },
    methods: {
        saveAnswer: function(pick){
            var selected = pick
            answers.push(selected)
            console.log(selected)
         },
         clicked: function(){
             this.selected = true;
         }
    }
})

Four = Vue.extend({
    name: 'Four',
    template: "#question-four",
     data: function(){
        return {picked: '', selected: false}
    },
    methods: {
        saveAnswer: function(pick){
            var selected = pick
            answers.push(selected)
            console.log(selected)
         },
         clicked: function(){
             this.selected = true;
         }
    }
})

Five = Vue.extend({
    name: 'Five',
    template: "#question-five",
    data: function(){
        return {picked: '', selected: false}
    },
    methods: {
        saveAnswer: function(pick){
            var selected = pick
            answers.push(selected)
            console.log(selected)
         },
         clicked: function(){
             this.selected = true;
         }
    }
})

Results = Vue.extend({
    name: 'Results',
    template: "#results",
    data: function(){
        return{ }
    },
    methods: {
        clear: function(){
            answers = [];
        }
    },
    computed:{
        displayResults: function(){
            var personalityOne = _.sample(['Jim', 'Pam'])
            var personalityTwo = _.sample(['Meredith', 'Creed', 'Kevin', 'Toby'])
            var personalityThree = _.sample(['Phyllis', 'Kelly', 'Stanley', 'Michael', 'Ryan', 'Daryl', 'Oscar'])
            var personalityFour = _.sample(['Angela', 'Dwight', 'Andy'])
            var randomize = _.sample([personalityOne, personalityTwo, personalityThree, personalityFour])
            if(perOne()){
                return 'You are: ' + personalityOne
            }
            else if(perTwo()){
                return 'You are: ' + personalityTwo
            }
            else if(perThree()){
                return 'You are: ' + personalityThree
            }
            else if(perFour()){
                return 'You are: ' + personalityFour
            }
            else{
                return 'You are: ' + randomize
            }
        }
    }
})

var router = new VueRouter()
router.map({
    '/': {
        component: Home
    },
    '/One': {
        component: One
    },
    '/Two': {
        component: Two
    },
    '/Three': {
        component: Three
    },
    '/Four': {
        component: Four
    },
    '/Five': {
        component: Five
    },
    '/Results': {
        component: Results
    }

})
var App = Vue.extend({

});
router.start(App, '#app')