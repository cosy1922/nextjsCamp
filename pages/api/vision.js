import { ImageAnnotatorClient } from '@google-cloud/vision';
import * as fs from 'fs';

// JSON 파일 경로
const credentialsPath = './public/cameraocr-438305-f3679e318fb4.json';
// JSON 파일 읽기
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

// 클라이언트 인스턴스 생성
const client = new ImageAnnotatorClient({
    credentials: {
        "type": credentials.type,
        "project_id": credentials.project_id,
        "private_key_id": credentials.private_key_id,
        "private_key": credentials.private_key,
        "client_email": credentials.client_email,
        "client_id": credentials.client_id,
        "auth_uri": credentials.auth_uri,
        "token_uri": credentials.token_uri,
        "auth_provider_x509_cert_url": credentials.auth_provider_x509_cert_url,
        "client_x509_cert_url": credentials.client_x509_cert_url,
        "universe_domain": credentials.universe_domain
    }
});

// const client = new ImageAnnotatorClient({
//     credentials: {
//         "type": "service_account",
//         "project_id": "cameraocr-438305",
//         "private_key_id": "f3679e318fb4fcd6b642f837fe3d79e49b4c5260",
//         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4xKEp2D3VO8VO\nkb+bIPnGF+DeG8ZyNZ8O2kNKViV11ruazpZbsSGxsvlij8GP+n+/NVLj+gNCpf+Q\n2jwR9EMyReuh2rlZlQ/edYgzp6kkdt+WT9EKH5URcigGHilTQhkBa+N9OwEV2vzP\nZ25Dtzf9bfRQyXYi+Bqo44BLSxas15vTycWEHYtXyr9ItvJWp0BloI0MsxiR9+li\nS4j8RIrd0VUslEcK3PdiU0fQ3MY0TSR+yu0JVmkBMebw5fcymgmfdDnbWixWegqv\n6NeBx0UM0oG2GCdmtjf1iZ8v/sRT4LxsYz0qej1ETkcWZ87HiUgAD6NJi+siY6me\n9YsPkSFLAgMBAAECggEAA3xPdK72o6d9VmPGKJKxA5Kpvvw+fHhp0r7oAWap+D91\nHzuBzKMFJAlgo60F6sW//ocZVDcANBQA7pD0tyX+Kob1JgLZTPOp7qQVo1vTWLPB\nY2AywlfMLnMShuMExo76/R2K7MQzMLVb4Dxu8RTAwqV+CWlziBSuyWbZTGeokC7M\n1apilSKqh35SPHUTHeBers8FfwMUng+bJ2saotIxp971DMrAYITmpK+mjpd961V9\nacQcUsMb+V54Al3OoAKArExyv76KpFukh1fj0B8Qb1nYLQhaKIgB04jB4iDHE8yy\nPl5Dn5Jm369uXQ1SJ1B4jC4sgrrIMQ6eKSlZi38csQKBgQDxAMtVUvnrWHcelg1i\n9Ehw+x2ThAVsD/dDFRu2cfIL3bggRys2T+1KX6LNbfRTWkHTNdqUByjwRMKJ66xU\ntDDyBG1n+qKK6HJl2gSKuRb6nRBOK0eZRKtohKzZ1no3wreUxu1MPCTjIQzl6azD\nfxM/im1Z9VmTMviobQcPPIjZkwKBgQDERAFa01tTWcaJABvg6JXF/gCZcwY8Y0+Q\nwwWR868XzNOmR/HmS4wdDG310LX1D914gUox5ldsEz26TWPyUgDd4DraHthnnFps\nhFwoVp8yQxzsnSJOT/nlI7a5BMLDhskReiXye8C52irwBI57llNptrWtJ1da77vI\nkwICK+8MaQKBgQCiPr6kem/1mGDZHnt0mrAKH4QRw1dDIJx9dMBrWtpwUpuaX08g\nCT7eSvP3CIbrdl/KKP81mHxfBGtTHm2tuIEa7RAaaAj1KveYyeU03tYxcXuApHJX\nJHugqXEUVeeBkny0lBc8s2DB54YfYekE04/Jvw9O+HWNO0tbV8rg3wfiMQKBgCB/\nskm73c97eiiNYBBp8wMKAEdoiIvPVgl+gZmdZEzomdNa7m9X6yeUO1EM8lRWADJI\nFmUU4zz+IqaK0hX6BjK3QoeDvAnMFh0J/cigL1Q/ULbNfjTBgXuz4jnY0/dUhk7i\njw4L9+nOenWsC3vjdIR4wLSfYxOnxsx7q0V4yOihAoGBAIRcBbvKkvw8h4zrLiWJ\n5U5EoshV/dqcZdfgF+i98RWshvszTIXknnDpxheBxpRWf4dau93PIwSqzxVpSn2l\noitzjwSuq7eedmH5uhK7H2xIyHf11I6cn2N+T/tft+026hBOPEGfoBnNps3cv/9l\n7mfvThPU9lDz5N165jvdwagf\n-----END PRIVATE KEY-----\n",
//         "client_email": "googlevision@cameraocr-438305.iam.gserviceaccount.com",
//         "client_id": "108582719986642190489",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://oauth2.googleapis.com/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/googlevision%40cameraocr-438305.iam.gserviceaccount.com",
//         "universe_domain": "googleapis.com"
//     }
// });

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log("***** start *****")
            console.log(req.body.imageUrl);
            const imageBuffer = Buffer.from(req.body.imageUrl, 'base64');

            const [result] = await client.textDetection({
                image: {
                    content: imageBuffer
                }
            });
            // const [result] = await client.textDetection(req.body.imageUrl);
            const detections = result.textAnnotations;

            console.log("**** result ****")
            console.log(result);
            //            console.log(detections)

            res.status(200).json({ text: detections[0].description });
        } catch (error) {
            console.error("Error during text detection:", error);
            res.status(500).json({ error: "Error during text detection" });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}