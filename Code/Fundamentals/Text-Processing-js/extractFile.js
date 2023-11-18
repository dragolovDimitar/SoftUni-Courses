function extract (file) {
    let info = file.split('\\').pop();
    let lastDot = info.lastIndexOf(".");

    let name = info.slice(0, lastDot);
    let extension = info.slice(lastDot + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extract('C:\\Internal\\training-internal\\Template.pptx')