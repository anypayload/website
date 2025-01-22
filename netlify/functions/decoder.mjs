export default async (req, context) => {
    const { device } = context.params;

    const body = await req.json()
    const payload = body.payload;
    const port = body.port;

    console.log(`received payload '${payload}' for device '${device}' on port '${port}'`);

    const bytes = Buffer.from(payload, 'hex');

    let decoded = null;

    switch (device) {
        case "axioma-qalcosonic-w1":
            let Decode = require("../../decoder/axioma-qalcosonic-w1/javascript/decoder.js");
            decoded = Decode(port, bytes);
            console.log('decoded:', decoded);
            return Response.json(decoded, { status: 200 });
        case "elvaco-CMi4140":
            let Decode = require("../../decoder/elvaco-CMi4140/javascript/decoder.js");
            decoded = doDecode(bytes, null);
            console.log('decoded:', decoded);
            return Response.json(decoded, { status: 200 });
        default:
            console.error(`no decoder found for device '${device}'`);
            return Response.json({error: "Unknown decoder"}, { status: 404 });
    }
};

export const config = {
    path: "/decoders/:device"
};