
    function selectCity(element) {
        // Find the input inside the parent dropdown and set its value
        let input = element.closest('.dropdown').querySelector('input');
        input.value = element.innerText;
    }
