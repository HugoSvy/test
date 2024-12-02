window.addEventListener("load", () => {
    const button = document.querySelector("button");
  
    if (window.self !== window.top) {
      // On s'assure que, si le document est dans une frame
      // la personne l'ouvre d'abord dans un onglet ou une
      // fenêtre à part afin de pouvoir gérer la permission
      // des notifications.
      button.textContent = "Voir le résultat de l'exemple de code";
      button.addEventListener("click", () => window.open(location.href));
      return;
    }
  
    button.addEventListener("click", () => {
      if (Notification?.permission === "granted") {
        // Si la personne a autorisé les notifications
        // On essaie de lui en envoyer 10
        let i = 0;
        // Pour cela, on utilise un intervalle afin d'éviter
        // que les navigateurs bloquent les notifications
        // s'il y en a trop sur une période donnée.
        const interval = setInterval(() => {
          // Grâce à la balise, on devrait uniquement voir
          // la notification "Coucou 9"
          const n = new Notification(`Coucou ${i}`, {
            tag: "tropDeNotifications",
          });
          if (i === 9) {
            clearInterval(interval);
          }
          i++;
        }, 200);
      } else if (Notification && Notification.permission !== "denied") {
        // Dans le cas où la personne n'a pas indiqué
        // si elle voulait recevoir des notifications
  
        // Note : à cause de Chrome, on ne peut pas être
        // certain que la propriété permission est
        // définie et on ne peut donc pas vérifier la
        // valeur "default".
        Notification.requestPermission().then((status) => {
          // Si la personne a autorisé
          if (status === "granted") {
            let i = 0;
            // Pour cela, on utilise un intervalle afin d'éviter
            // que les navigateurs bloquent les notifications
            // s'il y en a trop sur une période donnée.
            const interval = setInterval(() => {
              // Grâce à la balise, on devrait uniquement voir
              // la notification "Coucou 9"
              const n = new Notification(`Coucou ${i}`, {
                tag: "tropDeNotifications",
              });
              if (i === 9) {
                clearInterval(interval);
              }
              i++;
            }, 200);
          } else {
            // Sinon, on prend comme alternative une
            // fenêtre modale d'alerte
            alert("Coucou");
          }
        });
      } else {
        // Si la personne refuse les notifications, on
        // peut utiliser une fenêtre modale d'alerte
        alert("Coucou");
      }
    });
  });
  
