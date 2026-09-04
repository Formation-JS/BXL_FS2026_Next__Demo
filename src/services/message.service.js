const url_base = process.env.URL_WEB_API;

const MessageService = {

    send: async ({ email, content }) => {

        // Contact la web api pour une requete POST
        await fetch(`${url_base}/messages`, {
            method: 'POST',
            body: JSON.stringify({ email, content }),
            headers: { 'Content-Type': 'application/json'}
        });

        console.log('test !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        
    }

};

export default MessageService;