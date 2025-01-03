import '../../decoder/axioma-qalcosonic-w1/javascript/decoder.js';

exports.handler = async function(event, context) {
    switch (context.params.device) {
        case "axioma-qalcosonic-w1":
            const payload = hexToBytes(event.body.payload);
            const port = event.body.port;
            decoded = doDecode(payload, port);
            return {
                statusCode: 200,
                body: JSON.stringify(decoded)
            };
        default:
            return {
                statusCode: 404,
                body: JSON.stringify({
                    error: "Device not found"
                })
            }
    }
};

export const config = {
    path: "/decoders/:device"
};