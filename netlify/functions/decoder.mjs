const { Decode: decodeAxiomaQalW1 } = require("../../decoder/axioma-qalcosonic-w1/javascript/decoder.js");

// Convert a hex string to a byte array
function hexToBytes(hex) {
    let bytes = [];
    for (let c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

export default async (req, context) => {
    const { device } = context.params;

    const body = await req.json()
    const payload = body.payload;
    const port = body.port;

    console.log(`received payload '${payload}' for device '${device}' on port '${port}'`);

    const bytes = Buffer.from(payload, 'hex');

    switch (device) {
        case "axioma-qalcosonic-w1":
            const decoded = decodeAxiomaQalW1(port, bytes);
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