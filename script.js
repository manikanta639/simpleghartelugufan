const products = [
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-04-09%20at%205.44.42%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42nSCUb" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-04-08%20at%207.44.57%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42qkTtw" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-04-08%20at%207.46.14%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4i5Ti6v" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-04-07%20at%206.29.49%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4jntjZg" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-04-07%20at%206.28.54%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4jnOGd5" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-29%20at%206.28.58%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3E0U9aU" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-29%20at%206.29.40%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4c8R4C1" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-27%20at%207.23.20%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Y7N276" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-25%20at%206.48.43%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FI0uIO" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-25%20at%206.48.48%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Ya9gp0" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-25%20at%206.48.17%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4iNWaGD" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-19%20at%207.43.31%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XBIxSd" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-18%20at%208.35.49%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4iOidg4" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-18%20at%208.36.50%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/43DhmdH" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-18%20at%208.36.21%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4hVasnA" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-12%20at%207.03.09%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3G18jco" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-10%20at%207.58.41%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/41Q4u2p" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-07%20at%207.17.22%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42qann2" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-06%20at%207.12.47%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42oIOL0" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-05%20at%207.32.38%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/43sUOw0" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-04%20at%206.48.27%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FY7dOC" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-03%20at%206.14.10%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Y7KaHm" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-01%20at%207.38.45%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4jdThOZ" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-28%20at%207.51.30%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XDc3Hi" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-27%20at%208.25.26%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4lbcm6i" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-24%20at%209.23.09%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FLziZA" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-24%20at%209.22.47%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42arLea" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-22%20at%206.45.24%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42arLea" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-21%20at%207.38.33%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4hZjD6l" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-20%20at%206.55.22%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4iNlzQr" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-19%20at%207.01.28%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4cgmIOa" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-14%20at%205.20.53%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4hZeJq3" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-13%20at%208.52.42%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3E98yl9" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-12%20at%206.31.38%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4jbB9FA" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-08%20at%206.13.31%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4l9nu3t" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-06%20at%206.01.49%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XCp7g7" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-06%20at%206.02.16%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XDJGsB" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-04%20at%207.47.15%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42mUtKa" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-04%20at%207.46.45%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/43x9CtC" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-02-03%20at%206.06.34%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42bHQk2" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-31%20at%206.56.02%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3E0Cz6M" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-30%20at%206.25.56%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/429wmNX" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-30%20at%206.25.18%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4439TEE" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-29%20at%207.19.42%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4iNUw7V" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-24%20at%205.55.11%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/zxrcm4" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-24%20at%205.55.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/LAHTi8" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-23%20at%206.04.13%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XCSjng" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-23%20at%206.04.08%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4j8pVS3" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-20%20at%205.09.38%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FKuS54" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-20%20at%205.10.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/43zx3CE" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-20%20at%205.09.44%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3DNfYux" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-17%20at%205.03.53%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QUSwOJ" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-17%20at%205.04.32%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3RyhZh3" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-15%20at%207.58.58%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FHt78L" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%205.39.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/Fic2XI" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%201.32.36%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/7qK0zg" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%201.29.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4iZg69e" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-15%20at%207.40.55%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4cbnQ5J" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%201.32.43%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/vg3CQu" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%205.38.19%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/uuA4QI" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-11%20at%206.14.00%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4cbAMs1" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-15%20at%207.44.06%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3EbzJMd" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-15%20at%207.53.49%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42ciAdx" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-16%20at%205.39.44%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/N42Ecu" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-09%20at%205.15.47%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Rrp6Id" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-07%20at%204.26.50%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3DVkib5" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-06%20at%207.31.25%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FOSh5s" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-03%20at%206.18.03%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FY9r0q" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-02%20at%204.16.28%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4l9RTid" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-01-10%20at%204.27.45%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://fkrt.co/kK0RyN" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-28%20at%207.16.41%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4j85lRJ" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-27%20at%204.42.10%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FHZAfo" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-26%20at%203.50.30%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4c9fVFQ" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-24%20at%206.19.01%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XFEgNz" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-21%20at%206.06.52%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4iNhwng" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-16%20at%209.10.37%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FOHx7a" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-16%20at%209.11.08%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4iUs0S6" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-13%20at%207.26.40%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4l6LFPY" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-12%20at%204.32.45%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42oww5h" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-12%20at%204.31.00%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QWeJfl" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-10%20at%207.07.10%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4l0IxVQ" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-09%20at%206.27.54%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QSwtbx" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-06%20at%206.14.55%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4jducUw" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-05%20at%207.25.39%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Ybzac2" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-12-02%20at%206.33.40%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QSwyvR" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-29%20at%207.44.21%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QXsHOa" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-29%20at%207.43.50%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3XE6tnZ" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-28%20at%206.57.01%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42gieCD" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-27%20at%206.19.24%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/4jduryU" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-26%20at%207.11.38%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/42gin99" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-25%20at%205.27.42%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3FL7hRT" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-22%20at%206.07.24%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3E99KF9" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-22%20at%2011.55.10%E2%80%AFAM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3E1c550" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-18%20at%206.40.19%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3DUSwLP" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-16%20at%207.36.12%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3Rq3LyK" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-15%20at%206.48.05%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3QXvR4m" },
    { image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202024-11-13%20at%203.22.21%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format", link: "https://amzn.to/3E38Hql" },
    
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
