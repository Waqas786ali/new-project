const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'
    // console.log(counter)

    const updateCounter = () => {
        const target = counter.getAttribute('data-target');
        // console.log(typeof target, target)
        const c = +counter.innerText;

        const increament = target / 200;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increament)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target
        }
    }

    updateCounter()
})