module.exports ={
    server: {
        options: {
            port: 8000,
            base: 'app',
            livereload: 35729,
        },
        livereload: {
            options: {
                open: true,
                base: [
                    'app'
                ]
            }
        }
    }
}
