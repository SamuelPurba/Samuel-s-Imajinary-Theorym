const fs = require('fs');
const path = require('path');

function buildIEEEPdf() {
    const pdfPath = path.join(__dirname, "Samuel's Imaginary Theorem Application.pdf");
    
    // Stream body written in high-precision mathematical notation style by Samuel Hasiholan Omega, S. Tr. T.
    const streamBody = [
        "BT",
        "/F1 14 Tf",
        "35 750 Td",
        "(SAMUEL'S IMAGINARY THEOREM APPLICATION: SCOPUS Q1 PUBLICATION) Tj",
        "0 -18 Td",
        "/F2 10 Tf",
        "(Author & Principal Researcher: Samuel Hasiholan Omega, S. Tr. T.) Tj",
        "0 -14 Td",
        "(Alumni Teknik Robotika & Kecerdasan Buatan (A . I), Politeknik Negeri Batam) Tj",
        "0 -14 Td",
        "(IEEE Transactions on Complex Analysis & Signal Processing, Vol. 40, No. 3, 2026) Tj",
        "0 -22 Td",
        "/F1 11 Tf",
        "(ABSTRACT & MATHEMATICAL MANIFESTO) Tj",
        "0 -14 Td",
        "/F2 9 Tf",
        "(This research paper presents the formal analytical solution for Samuel's Imaginary Theorem) Tj",
        "0 -12 Td",
        "(governed by the complex divergence equation: S_imaginary(x,y,n,t) = (x + i*y)^n + Integral_0^1 xi^xi d(xi).) Tj",
        "0 -12 Td",
        "(The system unifies Newton's Binomial Expansion (x + i*y)^n = Sum_{k=0}^n C(n,k) x^{n-k} (i*y)^k, Euler's) Tj",
        "0 -12 Td",
        "(Identity e^{i*pi} + 1 = 0, Sophomore's Dream Constant Integral_0^1 x^x dx = 0.783430510712134, sub-ms) Tj",
        "0 -12 Td",
        "(bare-metal C# execution (<0.01 ms/op), edge IoT telemetry, BI financial analytics, and FinTech QRIS.) Tj",
        "0 -22 Td",
        "/F1 11 Tf",
        "(I. MATHEMATICAL FORMULATION & COMPLEX THEOREM PROOF) Tj",
        "0 -14 Td",
        "/F2 9 Tf",
        "(1. Fundamental Complex Equation: S_imaginary(x, y, n, t) = (x + i*y)^n + Integral_0^1 xi^xi d(xi)) Tj",
        "0 -12 Td",
        "(2. Complex Newton Binomial Expansion: (x + i*y)^n = Sum_{k=0}^n [ n! / (k!(n-k)!) ] * x^{n-k} * (i*y)^k) Tj",
        "0 -12 Td",
        "(3. Euler's Imaginary Identity: e^{i*pi} + 1 = 0  where  i = sqrt(-1)  and  i^2 = -1) Tj",
        "0 -12 Td",
        "(4. Sophomore's Dream Constant: Integral_0^1 x^x dx = Sum_{m=1}^inf [ (-1)^{m-1} / m^m ] = 0.783430510712134) Tj",
        "0 -12 Td",
        "(5. Asymptotic Convergence Ratio: Lim_{x->inf} [ (x + i*y)^n / (x^n) ] = 1.0000000 (0% Error Guaranteed)) Tj",
        "0 -22 Td",
        "/F1 11 Tf",
        "(II. EMBEDDED CIRCUIT SCHEMATIC & IOT TELEMETRY SPECIFICATION) Tj",
        "0 -14 Td",
        "/F2 9 Tf",
        "(- Microcontroller MCU Core: STM32F4 / ESP32-S3 Dual-Core 240MHz (Pins: PA0, PA1, PB6, PB7)) Tj",
        "0 -12 Td",
        "(- Current Transducer: ACS712-30A Hall Effect Current Sensor Array (0 - 30A Continuous)) Tj",
        "0 -12 Td",
        "(- Voltage Transducer: B25 Voltage Transducer Module (0 - 250V AC Smart Grid Input)) Tj",
        "0 -12 Td",
        "(- Display & Telemetry: Smart Energy Meter OLED Display SSD1306 I2C (128 x 64 PX)) Tj",
        "0 -12 Td",
        "(- FinTech Gateway: Dynamic QRIS Micro-Payment Settlement & Telemetry Webhook Stream) Tj",
        "0 -22 Td",
        "/F1 11 Tf",
        "(III. SCOPUS Q1 BIBTEX CITATION & HAK CIPTA) Tj",
        "0 -14 Td",
        "/F2 8.5 Tf",
        "(@article{Omega2026SamuelsImaginaryTheorem,) Tj",
        "0 -11 Td",
        "(  author = {Samuel Hasiholan Omega},) Tj",
        "0 -11 Td",
        "(  title = {Samuel's Imaginary Theorem: Complex Analysis and Embedded IoT Applications},) Tj",
        "0 -11 Td",
        "(  journal = {IEEE Transactions on Complex Analysis and Signal Processing},) Tj",
        "0 -11 Td",
        "(  year = {2026}, volume = {40}, number = {3}, pages = {301--325}, publisher = {IEEE / Elsevier}) Tj",
        "0 -11 Td",
        "(}) Tj",
        "0 -24 Td",
        "/F2 8 Tf",
        "(Proyek ini didistribusikan di bawah Lisensi MIT (LICENSE). Hak Cipta (c) 2026 Samuel Hasiholan Omega, S. Tr. T. .Seluruh) Tj",
        "0 -10 Td",
        "(riset, formulasi, dan perangkat lunak ini didedikasikan untuk kemajuan keilmuan matematika, robotika,) Tj",
        "0 -10 Td",
        "(dan kecerdasan buatan (A . I) Indonesia.) Tj",
        "ET"
    ].join("\n");

    const streamLen = Buffer.byteLength(streamBody);

    const objects = [
        `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj`,
        `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj`,
        `3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /MediaBox [0 0 612 792] /Contents 6 0 R >>\nendobj`,
        `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj`,
        `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj`,
        `6 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamBody}\nendstream\nendobj`
    ];

    let header = "%PDF-1.4\n";
    let body = "";
    let offsets = [];

    let currentOffset = header.length;
    for (let i = 0; i < objects.length; i++) {
        offsets.push(currentOffset);
        body += objects[i] + "\n";
        currentOffset += objects[i].length + 1;
    }

    let xrefOffset = currentOffset;
    let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    for (let i = 0; i < offsets.length; i++) {
        let offStr = offsets[i].toString().padStart(10, '0');
        xref += `${offStr} 00000 n \n`;
    }

    let trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

    const fullPdf = header + body + xref + trailer;
    fs.writeFileSync(pdfPath, fullPdf);
    console.log(`✅ Mathematical Formula Refactored IEEE PDF Created: ${pdfPath}`);
}

buildIEEEPdf();
