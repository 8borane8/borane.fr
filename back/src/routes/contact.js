const expressapi = require("@borane/expressapi");

module.exports = [
    {
        method: "POST",
        endpoint: "/contact",

        requestListener: async function(req, res){
            await expressapi.RequestHelper.request({
                url: process.env.WEBHOOK_URL,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: {
                    embeds: [
                        {
                            type: "rich",
                            color: 0x991487,
                            title: req.body.object,
                            description: req.body.message,
                            fields: [
                                {
                                    name: "Prénom",
                                    value: req.body.firstname,
                                    inline: true
                                },
                                {
                                    name: "Nom",
                                    value: req.body.lastname,
                                    inline: true
                                },
                                {
                                    name: "Téléphone",
                                    value: req.body.phone,
                                    inline: true
                                },
                                {
                                    name: "Email",
                                    value: req.body.email,
                                    inline: true
                                }
                            ]
                        }
                    ]
                }
            });

            res.status(200).json({
                success: true
            });
        }
    }
];