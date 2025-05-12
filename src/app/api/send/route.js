// export async function POST(req) {
//     const { email, subject, message } = await req.json();

//     const data = new URLSearchParams();
//     data.append('service_id', process.env.YOUR_SERVICE_ID);
//     data.append('template_id', process.env.YOUR_TEMPLATE_ID);
//     data.append('user_id', process.env.YOUR_PUBLIC_KEY); // Note: Private key
//     data.append('template_params', JSON.stringify({
//         from_email: email,
//         from_name: email,
//         to_name: "Maritha Ebolosue",
//         message: message,
//         subject: subject,
//     }));

//     try {
//         const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
//             method: "POST",
//             body: data,
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//         });

//         if (!response.ok) {
//             throw new Error(await response.text());
//         }

//         return NextResponse.json({ success: true });
//     } catch (error) {
//         return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 });
//     }
// }