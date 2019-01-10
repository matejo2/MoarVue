var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'blubb' + new Date().toDateString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        items: [
            { text: 'bla' },
            { text: 'blubb'},
            { text: ' bliiiii'}
        ]
    }
})

    var app5 = new Vue({
        el: '#app-5',
        data: {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    })
