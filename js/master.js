let child = document.querySelectorAll('.child')
    let article = document.querySelectorAll('.article>section')
    document.getElementsByTagName('main')[0].addEventListener('scroll', (e) => {
        let st = parseInt(e.target.scrollTop)
        console.log(st);
        if (st <= (1727 / 3)) {
            document.getElementById('c2').style.background = '#555'
            document.getElementById('c3').style.background = '#555'
            article[1].style.display = 'none'
            article[2].style.display = 'none'
            child[0].style.left = '0%'
            child[1].style.left = '100%'
            child[2].style.left = '200%'
            document.getElementById('c1').style.background = '#ddd'
            article[0].style.display = 'flex'
        }
        if ((st <= (2 * (1727 / 3))) && (st > (1727 / 3))) {
            article[0].style.display = 'none'
            article[2].style.display = 'none'
            document.getElementById('c1').style.background = '#555'
            document.getElementById('c3').style.background = '#555'
            child[0].style.left = '-100%'
            child[1].style.left = '0%'
            child[2].style.left = '100%'
            document.getElementById('c2').style.background = '#ddd'
            article[1].style.display = 'flex'
        }
        if (st > (2 * (1727 / 3))) {
            article[1].style.display = 'none'
            article[2].style.display = 'none'
            document.getElementById('c2').style.background = '#555'
            document.getElementById('c1').style.background = '#555'
            child[0].style.left = '-200%'
            child[1].style.left = '-100%'
            child[2].style.left = '0%'
            document.getElementById('c3').style.background = '#ddd'
            article[2].style.display = 'flex'

        }



    })