function close_alert(){
    document.getElementById('alert_msg_clean').style.display = "none";
    document.getElementById('alert_msg_succ').style.display = "none";
}

function btn_clean(){
    document.getElementById('alert_msg_clean').style.display = "block";
    setTimeout(close_alert, 2000); //3 sec
}

function btn_submit(){
    const $form = document.querySelector('#form')        
    $form.addEventListener('submit', handleSubmit)
    async function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(this)
        const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
        })
        if (response.ok){
            this.reset()
            document.getElementById('alert_msg_succ').style.display = "block";
        } 
    }
}
  