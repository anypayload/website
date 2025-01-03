const Decode = require("../../decoder/axioma-qalcosonic-w1/javascript/decoder.js");

export default async (req, context) => {
    const { device } = context.params;

    const body = await req.json()
    const payload = body.payload;
    const port = body.port;

    console.log(`received payload '${payload}' for device '${device}' on port '${port}'`);

    const bytes = Buffer.from(payload, "hex");

    switch (device) {
        case "axioma-qalcosonic-w1":
            const decoded = Decode(bytes, port);
            return Response.json(decoded, { status: 200 });
        default:
            console.error(`no decoder found for device '${device}'`);
            return Response.json({error: "Unknown decoder"}, { status: 404 });
    }
};

export const config = {
    path: "/decoders/:device"
};