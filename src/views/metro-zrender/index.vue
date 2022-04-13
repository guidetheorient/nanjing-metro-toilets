<template>
  <canvas ref="zrenderCanvasRef" id="canvas-zrender"></canvas>
</template>

<script>
const zrender = require('zrender')

import { calculateTextPosition } from 'zrender/lib/contain/text'
import {
  POINT_TYPES,
  LINE_1_POINTS,
  LINE_2_POINTS,
  LINE_3_POINTS,
  LINE_4_POINTS,
  LINE_10_POINTS,
  LINE_S1_POINTS,
  LINE_S3_POINTS,
  LINE_S6_POINTS,
  LINE_S7_POINTS,
  LINE_S8_POINTS,
  LINE_S9_POINTS,
  LINE_1_COLOR,
  LINE_2_COLOR,
  LINE_3_COLOR,
  LINE_4_COLOR,
  LINE_10_COLOR,
  LINE_S1_COLOR,
  LINE_S3_COLOR,
  LINE_S6_COLOR,
  LINE_S7_COLOR,
  LINE_S8_COLOR,
  LINE_S9_COLOR
} from '../../const'

function drawPathAndPoints(group, points, themeColor) {
  const halfWindowWidth = window.innerWidth / 2
  const halfWindowHeight = window.innerHeight / 2

  const path = new zrender.Polyline({
    shape: {
      points: points.map(({ x, y }) => [halfWindowWidth + x, halfWindowHeight + y])
    },
    style: {
      stroke: themeColor,
      lineWidth: 10
    }
  })
  group.add(path)

  points.forEach(({ x, y, type, name, angle, repeat, textZLevel = 0 }, i, arr) => {
    if (!type) {
      group.add(
        new zrender.Circle({
          shape: {
            cx: halfWindowWidth + x,
            cy: halfWindowHeight + y,
            r: 5
          },
          style: {
            fill: '#fff'
          }
        })
      )
    } else if (type === POINT_TYPES.HUGE) {
      group.add(
        new zrender.Circle({
          shape: {
            cx: halfWindowWidth + x,
            cy: halfWindowHeight + y,
            r: 14
          },
          style: {
            fill: '#fff',
            stroke: '#333',
            lineWidth: 2
          }
        })
      )
    } else if (type === POINT_TYPES.END) {
      group.add(
        new zrender.Circle({
          shape: {
            cx: halfWindowWidth + x,
            cy: halfWindowHeight + y,
            r: 10
          },
          style: {
            fill: '#fff',
            stroke: themeColor,
            lineWidth: 2
          }
        })
      )
    } else if (type === POINT_TYPES.TRANSFER) {
      group.add(
        new zrender.Rect({
          shape: {
            x: halfWindowWidth + x,
            y: halfWindowHeight + y,
            r: 6,
            width: 26,
            height: 12
          },
          rotation: (Math.PI / 180) * -angle,
          originX: halfWindowWidth + x + 13,
          originY: halfWindowHeight + y + 6,
          x: -13,
          y: -6,
          style: {
            fill: '#fff',
            stroke: '#333',
            lineWidth: 2
          }
        })
      )
    }

    if (repeat) return
    group.add(
      new zrender.Text({
        style: {
          text: name,
          textStroke: '#f00',
          fontSize: 14
        },
        zlevel: textZLevel,
        ...calcTextPosition(arr[i], i, arr)
      })
    )
  })
}

function calcTextPosition({ x, y, textTranslateX = 0, textTranslateY = 0 }, i, arr) {
  const halfWindowWidth = window.innerWidth / 2
  const halfWindowHeight = window.innerHeight / 2

  return {
    x: halfWindowWidth + x + textTranslateX + 20,
    y: halfWindowHeight + y + textTranslateY - 8
  }
}

export default {
  mounted() {
    let zrenderCanvasRef = this.$refs.zrenderCanvasRef

    zrenderCanvasRef.width = window.innerWidth - 20
    zrenderCanvasRef.height = window.innerHeight - 20

    let zr = (this.zr = zrender.init(zrenderCanvasRef))
    let group = new zrender.Group()
    zr.add(group)

    drawPathAndPoints(group, LINE_1_POINTS, LINE_1_COLOR)
    drawPathAndPoints(group, LINE_2_POINTS, LINE_2_COLOR)
    drawPathAndPoints(group, LINE_3_POINTS, LINE_3_COLOR)
    drawPathAndPoints(group, LINE_4_POINTS, LINE_4_COLOR)
    drawPathAndPoints(group, LINE_10_POINTS, LINE_10_COLOR)
    drawPathAndPoints(group, LINE_S1_POINTS, LINE_S1_COLOR)
    drawPathAndPoints(group, LINE_S3_POINTS, LINE_S3_COLOR)
    drawPathAndPoints(group, LINE_S6_POINTS, LINE_S6_COLOR)
    drawPathAndPoints(group, LINE_S7_POINTS, LINE_S7_COLOR)
    drawPathAndPoints(group, LINE_S8_POINTS, LINE_S8_COLOR)
    drawPathAndPoints(group, LINE_S9_POINTS, LINE_S9_COLOR)

    zr.on('mousewheel', (e) => {
      e.event.preventDefault()
      const [scaleX, scaleY] = group.scale
      const k = 1 + e.wheelDelta / 20

      const [x, y] = group.position

      group
        .attr('scale', [scaleX * k, scaleY * k])
        .attr('position', [e.offsetX - (e.offsetX - x) * k, e.offsetY - (e.offsetY - y) * k])
    })
  },
  beforeDestroy() {
    this.zr?.off('mousewheel', this.zoom)
  }
}
</script>

<style lang="scss">
#canvas-zrender {
}
</style>
