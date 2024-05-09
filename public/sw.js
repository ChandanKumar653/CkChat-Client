const apiLink = "http://localhost:3001";
// const apiLink = "https://ckchat-server.onrender.com";
self.addEventListener("activate", async (e) => {
    // console.log("under activate");
    const subscription = await self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array("BGOL2kpe-fHu-_DorSKvrULdEmyGMbwYkax8qyBU6_rRfaG1NgW8h_bj0cUmJlGFXSJ2U6QScipCDXY_4czleNY")
    });
    // console.log("Subscription=", subscription);
    // let save =
    await saveSubscription(subscription);
    // console.log(save);
})

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const binaryString = self.atob(base64); // Use self instead of window in a service worker

    const output = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; ++i) {
        output[i] = binaryString.charCodeAt(i);
    }
    return output;
}

async function saveSubscription(subscription) {
    try {
        // console.log("subscription in save=", subscription);
        // const response = await fetch("http://localhost:3001/save-subscription", {
            const response = await fetch(`${apiLink}/save-subscription`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQ2tDaGF0IiwiaWF0IjoxNzAzODU5MzE0fQ.Da4q9bPn4sa0B4sGq6TLy3k5ZqW4mBzifGPjHIx8E-g",
            },
            body: JSON.stringify(subscription)
        })
        // console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
        return;
    }
}

self.addEventListener("push", (e) => {
    // console.log(e);
    if (e.data) {
        const textData = e.data.text(); // Get the text content directly
        self.registration.showNotification("CkChat", { body: textData });
    } else {
        console.log('Push event received without any data');
    }
    // self.registration.showNotification("CkChat", { body: e.data.text })
})