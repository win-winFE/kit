'use strict';
/**
 * @api logo logo
 * @apiGroup kit
 * @apiVersion 1.0.0
 * @apiDescription 公司 logo
 * @apiUse kitNpm
 * @apiUse kitJs
 * @apiParamExample {string} 例子
 * var {logo}=kit;
 * // 白色 logo
 * <img src={logo.white}/>
 * // 黑色 logo
 * <img src={logo.black}/>
 **/

Object.defineProperty(exports, "__esModule", {
  value: true
});
var logo = {
  white: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAkCAYAAABSZHLHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQ0QUREMDNGNDkwMTFFOEFEQTlGQTUxNEUwOTM4NzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQ0QUREMDJGNDkwMTFFOEFEQTlGQTUxNEUwOTM4NzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjYwRTVGRkRFRUNBMTFFOEFFRUQ4ODExOEE1NjI5MjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjYwRTVGRkVFRUNBMTFFOEFFRUQ4ODExOEE1NjI5MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6LSdGwAAAL4UlEQVR42uxcC3CV1RG+CUGQBg1RKhYxURAREZBXcWzFYSoiD4tp60DxUaZ2CtOHTItTK1OrVApCBQWxaluKaK0tKjRapLbVUBMBjZqAhRaxJEFeKaQBEywBkn6f7F+XzflfN/cGncnO7Pz3vPc/Z8+e3T3734wEoKmp6SE8vppIL1QBCzIyMrYFVQItt+Nxe5pp2Q+8AbSsi9sQ9P0Tj94poGE1xh+bTEPQ0AWPHgrzTPoo+u4dsa/78bhVZZ2HthVeIkuenYCnp3lRLhEmnBVSr2Mr0ML+vwFcF3NhJqSIOQhXo7+BWIyyCONeh8c3FSN8KqRJpdlwfSS5D+PNiEOkxyAvAmvTsBDTgKeo9N4IbdYDH0gDLZOAnzZSJCpjtMfjJuBiU3QY+N8YNHAjtpff7YAvoO+peBZi4ZoC2g0gQ0Xo/wBwF3CFyqsGzlHv8hzGWps42QBCujY1h6EniZYM4AFDy8SQNsOB9wGfAVY73uVxYMeYdOQAX3b0VQV8EjgPmO9oN1PqrAOuAD5g2j8N7OQz5inAXaruc/aIMX3luySIV7mH7LROSa7FHnDnw/J7sCk7CtwYYzLPoJ4A7JIkLYeAC0APx+0FPM2UvxHSfjjwez5lvwNOkb4jA+rXyjFVCLxCFXnz/qFuAqww7WbjMdvMz3dVsg51DvmM2YC6i5QUGYt0H+T/I+4uyzaclgy8aLheww5OjuCgCDu+tIW0bAF2kP4mmrIjPNeFlit8aJju6LMcOCkFEi0L+B3gu44xrozYh4ZlESTX+6r+L5KRICTsbJXeCSz1GbMzcKTJ2wT8ikpbCXIOcKV6v27g4mqf/i807akf+Z2bPMvHADNV3m7gaPR/2IcWvvezapKGom6pQxe6G3hQzvXXUefdVBx5InkWY9wH8bwYyA1zliifFak+YkVy3YufXwTWU2LxeER+qP6kGcTu6sfQwUwHN+aphdbifBzqH1B5QwLGbZSJ9wNLy5/Q90TXzhBxn2mKaE5XBjCrhTrHpJJB1mOMkXIc9MHvdKpKFRhzvp8EwCMnoG222fk0c98z73MPHve0ROytNKKmwFFnNHCvj0hfC/yMEWsezjJ1N4bQMt/Uv81RZzBwqw8tfwf2VXU7K1qmmLoUvZkBtNQ3tQ4UBdBwV8y+KlTbC4BDeHRR8Xb5QYKOmMyAXVuqOskFPkqzzJiKGrjLNlAB8sSah0heZOq+GcKvg/wUSvR/KvAncgRc4NOezEGNf4TQ8r6ixfoxypHfGGKaftLgiPpN39PrwJdlTi6K7QchA+BxrsqnQ6VKyuhQmgvMNW23ALfKuab1jL+gzeVGxA+MySCXmvRbQss4PJYYWj+0nngMAW9WebRa/sidY/SLS1tISxAsFF3OgyeB8yO2rQsoW6P8VFeJzmVhn7J09DstEc+0Z5J/H3hL3OPlCwHWyAyHCFshYpvWxh2mjGbVGNX+dEf7zwXQkmfq/kt7FB19FQPPlvLJMr6Gb5v+/23Kp6TQ37LK9H1/Gnw6RQFHy40+bZaoOodpIEQ9YrxKt5lKc43J6ekn+4A3O9pPk/JDwGtN2QjTdyOZK2ACCiwzmvL71Fiku50pv1YxyTRT1t0xqf0/KQxCHU/mzw+4Pl0d7XqadrPjmrkUx+Uqf63Sfr1dxkuqeUjXODT+n5MA/HwHv18K0Se2UicImIczDS1/NuU/EBf3I+YY82gpBC1f5jvh9xOm2FozDcDNIYvCzTI64hqeZ9KTo/o1qPOB3jDRTzdCRkA5nYuLlNPNmxP6W2jWf8m7AkF6DvLrEm3Q4l3beLKtGEXLep+2VSY93uWZ5uWgYC/lRIzmKEPBuaJgZbbS3Bf7Xf2DFkqRUYkTL/rSCWUBt6pVMfqhhXeqSlNS1kS9pghhDvqfPutT/KxYZ9dImhJ9Ld7poJIivJzcH3diPCuGVsar5uXSDTy2tjkmopvc2XRtRVroMS3z8ULmx9FBjFW3FO2np4hGfWwcTDS/W5qgTHI+HwI93l1RR2XFWLjEpB+lfmclyI2tzBxBUNDKzBG26HSB6yuIHbIbW9pvd/Oelej3PyH6hwe87LvBMHKD6FQJ8fhOTpK0q1xHzBmmEh1RS1M81z9TSlKYmNbw60R4kFFc4K6+NWLd04x0pcL3eSzI7hYwRz9xXJ2pjpd+AfUvNMr+7y2DpAnqsnwKanTYGQikGNLmJK2VelXe1+gLzXYD6iSrMR80tPQ23s0qbVlRAcMjW5/tKN9jaIkcHIW270hQz2OS1VM8xtfLfU1c5mCYIa2rHOX1nBwila5Xv3nHUhI2Zw6Lyg/ulOPegwFK72rIivBCncXszDAe03op7yDlui+63V9JE1f/LXH85tODEZLnAa8DehldZ1lLBsTiLafDL3E80o3zwPiNEuRRus1VynalSIPO4vncqeaRet6PRVfQZvYkh2vAQl9l+vNysjGEXpZXRGTYg44NWdvMigmAoYY59qKDnSrd39FPeZr0gR6GOXjYvqW9toY5En7KZxJMwuv57SJJcsXa+zqRkV7ir6Gp+njieHAUN06e+FGukXnSsIN6BfrdEGHsSWYeclpLB8sSzs4NqGOv7bdLGw/GOsy18x1X47kRGIA7pVsIs2pgnEZPNZZ1yrGgvaE3ETKGRwuVtanqaD0mTijqAz8Ffi3xUXzpZYJRgJL3QdHzeDv+Q1P+Ehhi0cdFSc/SOzDiogwPadMtQp8JLX4VMNwuL6DNMJPuHjIWJd9rEWhxBS7xgmukw8JaLotL05gXmdc5pEPCwagbxF/xSyBN56eA4xx1axMfI4hyxAxJw7ivihYfFwangRZGif3Gkd/Op/5NYkK+IMyyUCyc/uKs6iJpSgoq6puVjkZpu1L0plTCkXQxSIYE0WrtlwrONi8iyZTHBd6ZfGDyqJi95gr4xVijlIVSJ2f5e54SaMqTmcR6k8d3LXUF/DqsIT8gjVvQx7GA46qDHE1RvNQ1XqhFQH88rheo+ZxPaytJvY56lOeaZ8jAt1SoZhu0QRu0QRu0Qdp0EOXEqVFhhvScZiJdLmlaC2ch/aY6u6h0MTJsvQ6fl+tiYgnyj0jelXLWR/Kmoj7D/Bj2uEPS/cUfsFHSdNR1RVr7QDqKheVHD2+Pj/rR7UPHOS6/inYkqf6avR+DhRPHI8zLJE3Xer79xELRaOFt1N3nGOsEt4LrIygJIL9MTPH9sh6HVHm2GCDFnj4odGQj/bbtbCE//VPpSolOaifpR+QfAE5w1rjiB1QE9h0qr8nhiwhamCXex0AS0bYTuMeLPsdzKT8/tJMcQs+MILp96Jgu4y5T2MdnHgY62pfJR1oXewo/8xz1Jkjfhd6HUIKDfMZ6WtW5xdHfWInG/y1wAfBhCefQdQZKXzlmrla5JoIh8fvJEMABwBqZmMulnAEpV8dgkE3Sx/lJMsgojyHk84ZqoW+YMMxu+V4lKoNsFnrykmCQopA6YQzyBrBE6HYyiF20CGPlh9D017Bwx6gM4vlBiuW4GSbOoefFRB3Pj57Fti+K6VugI4hSZ7QPgTy29PcumyDafiW/i8SXMEicSc+LX2K8mJU8TuLc9TD6njegi8WPEQf6qUmrB41xr9E5B1PFqVadItVAx2zMcbjreTtfEbGvV9DXMeXkXN+MQeRspheTdwb0NfBqnufzveLsWZOEbTwPODHgK3oynubW/5+18sExQ/3HCFPMEga5Uxh3taffxIA54nUtiNmOE32X/D6WxGKyDY8BfinwoxQxCKXDLvm93VHeEODoszBO1oKg/0ukmSf1D8IQDI5ZIy+WLy93d2ztFwso5+NKn/K6EKlUKAvTXSY3UzyejKqfmQQ9h+Ubn1Uxm9ZF+ZOXkLH50fdSeZ9USJHNOgTCAQwwH0k9LcI/EBzwlG7Ub6a0a88emYLn3zNcPOAHckyQE1c7OqYXslJEvoZabxJE9C2Xeg0xJ2G1jP0UaZH4kxVC8xofj2YYPSWKnih/3UDP8p6QOo0B77cr8dEHUdxkVWrnJ3x2fmWEsZ6Q72OK5B+ELHAD0eO8TQKdi8Uz7Bqr0TVXHvxPgAEAAxKNFYoT5OQAAAAASUVORK5CYII=',
  black: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAkCAYAAABSZHLHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODQ3NTQ0ODRGNTFCMTFFOEFGMDZBRjk3OUE0MDQwQ0QiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODQ3NTQ0ODNGNTFCMTFFOEFGMDZBRjk3OUE0MDQwQ0QiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEQ0QUREMDZGNDkwMTFFOEFEQTlGQTUxNEUwOTM4NzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEQ0QUREMDdGNDkwMTFFOEFEQTlGQTUxNEUwOTM4NzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6KAeMjAAAMaklEQVR42uxcCZSX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'
};
exports.default = logo;
//# sourceMappingURL=logo.js.map