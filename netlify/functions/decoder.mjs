import { doDecode as decodeAxiomaQalcosonicW1, hexToBytes } from '../../decoder/axioma-qalcosonic-w1/javascript/decoder.js';

export default async (req, context) => {
    switch (context.params.device) {
        case "axioma-qalcosonic-w1":
            const payload = hexToBytes(req.body.payload);
            const port = req.body.port;
            decoded = decodeAxiomaQalcosonicW1(payload, port);
            return new Response.json(decoded, { status: 200 });
        default:
            return new Response("Unknown decoder", { status: 404 });
    }
};

export const config = {
    path: "/decoders/:device"
};