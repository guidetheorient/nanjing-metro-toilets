
<template>
  <canvas id="canvas" ref="canvasRef"></canvas>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';

import { throttle } from 'lodash-es'

import Zdog from 'zdog'
import Zfont from 'zfont';
Zfont.init(Zdog);

import MSYH from '../assets/fonts/微软雅黑.ttf'

import { POINT_TYPES, LINE_1_POINTS, LINE_2_POINTS } from './const'

const font = new Zdog.Font({
  src: MSYH
});

const LINE_1_COLOR = '#01a3e0'
const LINE_2_COLOR = '#cc003a'
const LINE_3_COLOR = '#00944d'
const LINE_4_COLOR = '#786cae'
const LINE_10_COLOR = '#f0c687'
const LINE_S1_COLOR = '#43bdb5'
const LINE_S3_COLOR = '#bd84ae'
const LINE_S6_COLOR = '#cb90dc'
const LINE_S7_COLOR = '#f09894'
const LINE_S8_COLOR = '#efa553'
const LINE_S9_COLOR = '#ffa502'

const canvasRef = ref(null)
let canvas

const throttledResize = throttle(() => {
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight * 1.5

  if (canvas) {
    canvas.updateRenderGraph();
  }
}, 200)

// 终点站
let endPoint = new Zdog.Ellipse({
  diameter: 20,
  stroke: 3,
});

new Zdog.Shape({
  addTo: endPoint,
  stroke: 18,
  color: '#fff',
});

// 一般站点
let defaultPoint = new Zdog.Shape({
  stroke: 10,
  color: '#fff',
})

// 重大换乘站
let hugePoint = new Zdog.Ellipse({
  diameter: 30,
  stroke: 2,
  color: '#333',
});

new Zdog.Shape({
  addTo: hugePoint,
  stroke: 29,
  color: '#fff',
});

// 一般换乘站
let transferPoint = new Zdog.RoundedRect({
  width: 30,
  height: 14,
  cornerRadius: 10,
  stroke: 2,
  color: '#333',
  rotate: { z: Zdog.TAU / 4 }
});

new Zdog.RoundedRect({
  addTo: transferPoint,
  width: 28,
  height: 12,
  cornerRadius: 9,
  fill: true,
  color: '#fff',
});

function drawPathAndPoints(canvas, points, themeColor) {
  new Zdog.Shape({
    addTo: canvas,
    path: points.map(({ x, y }) => ({ x, y })),
    closed: false,
    stroke: 10,
    color: themeColor,
  });

  points.forEach(({ x, y, type, name, angle }) => {
    if (!type) {
      defaultPoint.copy({
        addTo: canvas,
        translate: { x, y }
      })
    } else if (type === POINT_TYPES.HUGE) {
      hugePoint.copyGraph({
        addTo: canvas,
        translate: { x, y }
      })
    } else if (type === POINT_TYPES.END) {
      endPoint.copyGraph({
        color: themeColor,
        addTo: canvas,
        translate: { x, y }
      })
    } else if (type == POINT_TYPES.TRANSFER) {
      transferPoint.copyGraph({
        addTo: canvas,
        translate: { x, y },
        rotate: { z: angle ? Zdog.TAU / (360 / angle) : 0 }
      })
    }

    new Zdog.Text({
      addTo: canvas,
      font: font,
      value: name,
      fontSize: 14,
      color: '#333',
      translate: { x: x + 30, y: y + 7 },
      fill: true,
    });

  })
}

onMounted(() => {
  throttledResize()

  canvas = new Zdog.Illustration({
    element: canvasRef.value,
  });

  drawPathAndPoints(canvas, LINE_1_POINTS, LINE_1_COLOR)
  drawPathAndPoints(canvas, LINE_2_POINTS, LINE_2_COLOR)

  // update & render
  canvas.updateRenderGraph();

  window.addEventListener('resize', throttledResize)

})

onUnmounted(() => {
  window.removeEventListener('resize', throttledResize)
})


</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  padding: 0;
  margin: 0;
}

#canvas {
  background-color: #ff8ba7;
}
</style>
