# Ghostscript-pdf-compress.wasm

## Context

This project takes any PDF and compresses it locally in your browser via ghostscript. This fork builds on the work of [laurentmmeyer](https://github.com/laurentmmeyer) but uses the `gs.wasm` compiled by [ghostpdl-wasm](https://github.com/jkrimmer/ghostpdl-wasm).

The applied command is:

```
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.5 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
```

## Run the project

To run the project, simply do the following steps

```bash
git clone https://github.com/jkrimmer/ghostscript-pdf-compress.wasm
cd ghostscript-pdf-compress.wasm
yarn
yarn dev
```

## Demo

[https://laurentmmeyer.github.io/ghostscript-pdf-compress.wasm/](https://laurentmmeyer.github.io/ghostscript-pdf-compress.wasm/)

## Blog

[laurentmmeyer](https://github.com/laurentmmeyer) wrote a [post](https://meyer-laurent.com/playing-around-webassembly-and-ghostscript) about the process.
