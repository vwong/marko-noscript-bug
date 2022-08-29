# Bug

This repo demonstrates an apparent bug with Marko 5.21.9

When running with `npx @marko/serve .` (ie, development mode), the code behaves
as expected.

But when running it with `npx @marko/build . && node build`, the bug presents
itself, and the output of `<named-body-content>` is broken. Fortunately, there
is a workaround for the moment as demonstrated by
`<named-body-content-workaround>`.

The problem appears specific to named body contents. The unnamed version
`<unnamed-body-content>` seems to work correctly.
