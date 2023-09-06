const prompts = {
    summarise: 'Provide the complete code to each of the previous files and include a single-line terminal script to create the required folder structure and names of files. If the code is too long for a single message, break it into multiple messages and label them appropriately.',
    motivate: 'You are being prompted to check in on me, I might have lost focus so you will return a numbered list of tasks and offer to help with building any of them. You should ask qualifying questions in case you need to explain things or clarify something before building out whatever task may be selected. If none are provided ask what I’m working on or starting and offer steps to start, maybe some code to get me started and overcome the initial barrier to coding.',
    stretch: 'Please come up with a list of 5 stretches (for someone who works behind a desk too much) and ask if I am able to get up and stretch right now, return the numbered list and briefly outline the area and benefit as well as further information when a number is selected.',
    learn: 'You are being prompted to teach me something, please provide a spanish phrase (not too basic) that will be useful to learn for day to day conversation. OR you can offer to teach the grammar for a common verb. After providing this information ask me if I want a quick test where you will ask a simple question which requires me to use the information you just taught. After this small study break return to normal operating procedures.',
};
const inputField = document.querySelector('#prompt-textarea'); // Assuming it's an ID
const submitButton = document.querySelector('[data-testid="send-button"]'); // Assuming it's an ID
  

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',afterDOMLoaded);
} else {
        afterDOMLoaded();
    }
    
    function afterDOMLoaded(){
        
        function triggerPrompt(event) {
            const promptKey = event.target.getAttribute('data-prompt-key')
            console.log("promptKey: ", promptKey)
            const selectedPrompt = prompts[promptKey]
            
            if (inputField) {
                inputField.value = selectedPrompt;
                const event = new Event('input', {
                    'bubbles': true,
                    'cancelable': true
                });
                inputField.dispatchEvent(event);
                submitButton.click();
            }
        }
        
        const buttonContainer = document.createElement('div');
        buttonContainer.style.position = 'absolute';
        buttonContainer.style.bottom = '0%';
        buttonContainer.style.left = '50%';
        
        for (const [key, value] of Object.entries(prompts)) {
            const button = document.createElement('button');
            button.innerText = `${key.toUpperCase()}`;
            button.setAttribute('data-prompt-key', key);
            button.addEventListener('click', triggerPrompt);
            button.style.backgroundColor = 'blue';
            button.style.color = 'white';
            button.style.padding = '10px';
            button.style.borderRadius = '5px';
            button.style.marginLeft = '10px';
            
            buttonContainer.appendChild(button);
        }
        
        if (inputField) {
            document.body.appendChild(buttonContainer);
        }
        
    }
    
    // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //     if (request.action === 'updateDOM') {
    //             // document.addEventListener('DOMContentLoaded', () => {
    //             const prompts = {
    //                 summarise: 'summarise this',
    //                 motivate: 'Your motivation prompt here',
    //                 stretch: 'Your stretch prompt here',
    //                 learn: 'Your learn prompt here',
    //             };
                
    //             function triggerPrompt(event) {
    //                 const promptKey = event.target.getAttribute('data-prompt-key')
    //                 const selectedPrompt = prompts[promptKey]
                
    //                 if (inputField && submitButton) {
    //                     inputField.value = selectedPrompt;
    //                     submitButton.click();
    //                 }
    //             }
                
    //             console.log("inputField: ", inputField);
    //             console.log("submitButton: ", submitButton);
    
    //             // log prompts
    //             console.log("prompts: ", prompts);
    
    //             // for (const [key, value] of Object.entries(prompts)) {
    //                 const button = document.createElement('button');
    //                 // button.innerText = `${key}`;
    //                 button.innerText = `banana`;
    //                 // button.setAttribute('data-prompt-key', key);
    //                 // button.addEventListener('click', triggerPrompt);
    
    //                 if (inputField) {
    //                     document.body.appendChild(button);
    //                 }
    //             // }
    //         // });
    //     }
    //     });
    