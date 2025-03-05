const products = [
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-04%20at%206.48.27%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Dm9l1R" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-03%20at%206.14.10%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41GSbFp" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-01%20at%207.38.45%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Dl3eee" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-28%20at%207.51.30%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XqUERO" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-27%20at%208.25.26%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41J2TLy" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-24%20at%209.23.09%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/43lMjCK" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-24%20at%209.22.47%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QHq0jD" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-22%20at%206.45.24%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QIUOAe" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-21%20at%207.38.33%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4ipNfdB" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-20%20at%206.55.22%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4hbVf11" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-19%20at%207.01.28%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i5i1sr" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-14%20at%205.20.53%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3F8QXKr" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-13%20at%208.52.42%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FhNl8P" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-12%20at%206.31.38%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4buukvS" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-08%20at%206.13.31%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41pfulN" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-06%20at%206.01.49%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4hhamGA" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-06%20at%206.02.16%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Dht42J" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-04%20at%207.47.15%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QGJW6a" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-04%20at%207.46.45%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4iqH2hD" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-03%20at%206.06.34%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i4A5Tw" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-31%20at%206.56.02%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XtoHsp" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-30%20at%206.25.56%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i1gXpN" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-30%20at%206.25.18%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4bwZJhl" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-29%20at%207.19.42%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41rRX3D" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-24%20at%205.55.11%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/zxrcm4" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-24%20at%205.55.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/LAHTi8" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-23%20at%206.04.13%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4heMPG2" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-23%20at%206.04.08%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i7MHJU" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-20%20at%205.09.38%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41pg2In" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-20%20at%205.10.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3DuwQWt" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-20%20at%205.09.44%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i2KoYh" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-17%20at%205.03.53%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Xt4xym" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-17%20at%205.04.32%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4h7FBng" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-15%20at%207.58.58%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i4BhX0" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%201.31.58%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/qmD5Ok" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-15%20at%207.48.46%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4ktRI10" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%205.39.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/Fic2XI" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%201.32.36%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/7qK0zg" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%201.29.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XoQZUU" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-15%20at%207.40.55%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QL6EtH" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%201.32.43%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/vg3CQu" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%205.38.19%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/uuA4QI" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-11%20at%206.14.00%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4bJmmzv" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-15%20at%207.44.06%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4bolv77" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-15%20at%207.53.49%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4iqIu3z" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%205.39.44%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/N42Ecu" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-09%20at%205.15.47%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4kt5yjS" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-07%20at%204.26.50%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41u5zeK" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-06%20at%207.31.25%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41Hr5ht" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-03%20at%206.18.03%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41qny63" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-02%20at%204.16.28%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4ktRZB4" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-10%20at%204.27.45%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/kK0RyN" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-28%20at%207.16.41%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Dk0n5m" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-27%20at%204.42.10%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4knwtxJ" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-26%20at%203.50.30%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4hf3AAN" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-24%20at%206.19.01%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i4EFkX" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-21%20at%206.06.52%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i5N8Ei" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-16%20at%209.10.37%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4kuLk9J" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-16%20at%209.11.08%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4haAMK3" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-13%20at%207.26.40%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4h8klxC" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-12%20at%204.32.45%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3F1dCbE" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-12%20at%204.31.00%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4h9o8uJ" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-10%20at%207.07.10%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4h9PQY0" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-09%20at%206.27.54%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4ih5LVE" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-06%20at%206.14.55%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4ktoLSu" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-05%20at%207.25.39%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QP7ky8" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-02%20at%206.33.40%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3F1kzJM" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-29%20at%207.44.21%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XrqTR3" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-29%20at%207.43.50%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3DlyPwn" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-28%20at%206.57.01%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4brdY7w" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-27%20at%206.19.24%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4hfaje1" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-26%20at%207.11.38%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4bse4LY" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-25%20at%205.27.42%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XtwuXb" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-22%20at%206.07.24%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/43up8WS" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-22%20at%2011.55.10%E2%80%AFAM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/43pqkes" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-18%20at%206.40.19%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4kuSdYD" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-16%20at%207.36.12%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i3fcbj" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-15%20at%206.48.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4ipXJcX" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-13%20at%203.22.21%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FhWONp" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-12%20at%209.33.14%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QLBdQ7" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-09%20at%209.26.25%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QKy0jS" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-08%20at%206.10.17%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4irjIjW" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-07%20at%208.04.28%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4btpXRW" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-06%20at%206.30.11%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4h9vluN" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-05%20at%205.16.30%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XsCZta" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-12%20at%206.07.36%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/43mvlnO" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-01%20at%205.55.03%20PM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Dlf5sK" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-10-30%20at%206.23.55%20PM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4h8nDBc" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-10-28%20at%207.23.06%20PM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/43mTZow" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-10-26%20at%208.41.12%20PM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41j2RbS" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-10-26%20at%208.40.38%20PM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4kpCytu" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-10-26%20at%208.41.49%20PM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QKDI59" },
];

function renderProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear existing products
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <a href="${product.link}" target="_blank">
                <img src="${product.image}" alt="Product">
            </a>
        `;

        container.appendChild(card);
    });
}

function filterProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        const img = card.querySelector("img");
        const productImageSrc = img ? img.src.toLowerCase() : "";
        card.style.display = productImageSrc.includes(searchValue) ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", renderProducts);
