console.log("This message is from service worker file");
// if (1) {
//     console.log("1");
// }
// if (!('serviceWorker' in navigator)) {
//     // Check if a service worker is already registered
//     console.log("service worker");
//     navigator.serviceWorker.getRegistration()
//         .then(function (registration) {
//             if (registration) {
//                 console.log("under if");
//                 console.log('Service Worker is already registered:', registration);


//             } else {
//                 // Register the service worker
//                 console.log("under else");
self.addEventListener("activate", async (e) => {
    console.log("under activate");
    const subscription = await self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array("BGOL2kpe-fHu-_DorSKvrULdEmyGMbwYkax8qyBU6_rRfaG1NgW8h_bj0cUmJlGFXSJ2U6QScipCDXY_4czleNY")
    });
    console.log("Subscription=", subscription);
    let save = await saveSubscription(subscription);
    console.log(save);
})

//             }
//         })
//         .catch(function (error) {
//             console.error('Error while checking Service Worker registration:', error);
//         });
// }

// console.log("end");
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
        console.log("subscription in save=", subscription);
        const response = await fetch("https://ckchat-server.onrender.com/save-subscription", {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(subscription)
        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
        return;
    }
}

self.addEventListener("push", (e) => {
    console.log(e);
    if (e.data) {
        const textData = e.data.text(); // Get the text content directly
        self.registration.showNotification("CkChat", { body: textData });
    } else {
        console.log('Push event received without any data');
    }
    // self.registration.showNotification("CkChat", { body: e.data.text })
})