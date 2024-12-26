import { doDecode as decodeAxiomaQalcosonicW1 } from '../../decoder/axioma-qalcosonic-w1/javascript/decoder.js';

export default async (req, context) => {
    switch (context.params.device) {
        case "axioma-qalcosonic-w1":
            return new Response(decodeAxiomaQalcosonicW1(req.body.bytes, req.body.fPort));
        default:
            return new Response("Unknown decoder", { status: 404 });
    }
};

export const config = {
    path: "/decoders/:device"
};