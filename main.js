let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } else if (buttonText === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        } else {
            string += buttonText;
            document.querySelector('input').value = string;
        }
    });
});
