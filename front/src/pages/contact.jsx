return {
    url: "/contact",
    template: "app",

    title: "Borane - Me contacter",
    favicon: "/favicon.ico",

    styles: [
        "/styles/contact.css"
    ],
    scripts: [
        "/scripts/contact.js"
    ],

    head: <>
        <meta property="og:title" content="Borane - Me contacter" />

        <meta property="description" content="Borane vous invite à le contacter via son portfolio pour démarrer votre projet." />
        <meta property="og:description" content="Borane vous invite à le contacter via son portfolio pour démarrer votre projet." />
    </>,

    body: <>
        <h1>Me contacter</h1>
        <form>
            <div>
                <div>
                    <label for="input-firstname">Prénom:</label>
                    <input type="text" name="firstname" id="input-firstname" autocomplete="given-name" placeholder="John" required />
                </div>
                <div>
                    <label for="input-lastname">Nom:</label>
                    <input type="text" name="lastname" id="input-lastname" autocomplete="family-name" placeholder="Doe" required />
                </div>
            </div>
            <div>
                <div>
                    <label for="input-email">Email:</label>
                    <input type="email" name="email" id="input-email" autocomplete="email" placeholder="exemple@gmail.com" required />
                </div>
                <div>
                    <label for="input-phone">Téléphone:</label>
                    <input type="tel" name="phone" id="input-phone" autocomplete="tel" placeholder="06 06 06 06 06" required minlength="14" maxlength="14" />
                </div>
            </div>
            
            <label for="input-object">Objet:</label>
            <input type="text" name="object" id="input-object" placeholder="Devis site vitrine ..." minlength="3" maxlength="100" required />

            <label for="input-object">Message:</label>
            <textarea name="message" id="input-message" placeholder="Votre message ..." minlength="50" maxlength="2000" required></textarea>

            <input type="submit" value="Envoyer" class="animation-on-scroll" />
        </form>
    </>,

    onrequest: null
};