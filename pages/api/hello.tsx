// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res
    .status(200)
    .json({
      name: "Hello. This is Hammad Khokhar. Please reach out at hello@hammadkhokhar.comp",
    });
}
