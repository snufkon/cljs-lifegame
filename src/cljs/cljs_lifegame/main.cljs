(ns cljs-lifegame.main)

(def SCREEN_SIZE 500)
(def SIDE_CELLS 50)
(def CELL_SIZE (/ SCREEN_SIZE SIDE_CELLS))
(def FPS 10)

;; for debug
;; (def blinker #{[2 3] [2 4] [2 5]})

(defn make-cells []
  (set (for [x (range SIDE_CELLS)
             y (range SIDE_CELLS)
             :when (== 1 (rand-int 2))]
         [x y])))

(defn neighbors [[x y]]
  (for [dx [-1 0 1] dy [-1 0 1]
        :when (not= 0 dx dy)]
    [(+ x dx) (+ y dy)]))

(defn step [cells]
  (set (for [[[x y :as loc] n] (frequencies (mapcat neighbors cells))
             :when (and (>= x 0) (< x SIDE_CELLS)
                        (>= y 0) (< y SIDE_CELLS)
                        (or (== n 3) (and (== n 2) (cells loc))))]
         loc)))

(defn draw-line [ctx [x1 y1] [x2 y2]]
  (.beginPath ctx)
  (set! (.-lineWidth ctx) 0.5)
  (set! (.-strokeStyle ctx) "rgb(255, 0, 0)")
  (.moveTo ctx x1 y1)
  (.lineTo ctx x2 y2)
  (.closePath ctx)
  (.stroke ctx))

(defn draw-grid [ctx]
  (doseq [i (range (inc SIDE_CELLS))]
    (let [p1 [(* i CELL_SIZE) 0]
          p2 [(* i CELL_SIZE) SCREEN_SIZE]
          p3 [0 (* i CELL_SIZE)]
          p4 [SCREEN_SIZE (* i CELL_SIZE)]]
      (draw-line ctx p1 p2)
      (draw-line ctx p3 p4))))

(defn draw [ctx cells]
  (.clearRect ctx 0 0 SCREEN_SIZE SCREEN_SIZE)
  (draw-grid ctx)
  (doseq [[x y] cells
          :when (and (>= x 0) (< x SIDE_CELLS)
                     (>= y 0) (< y SIDE_CELLS))]
    (.fillRect ctx, (* y CELL_SIZE) (* x CELL_SIZE) CELL_SIZE CELL_SIZE)))

(defn simulate [ctx cells]
  (draw ctx cells)
  (let [new-cells (step cells)]
    (js/setTimeout simulate (/ 1000 FPS) ctx new-cells)))

(defn init []
  (let [canvas (.getElementById js/document "world")
        ctx (.getContext canvas "2d")
        scale-rate (/ (min (.-innerWidth js/window) (.-innerHeight js/window))
                      SCREEN_SIZE)
        style (.-style canvas)
        size (str (* SCREEN_SIZE scale-rate) "px")]
    (set! (.-width canvas) SCREEN_SIZE)
    (set! (.-height canvas) SCREEN_SIZE)
    (set! (.-width style) size)
    (set! (.-height style) size)
    (set! (.-fillStyle ctx) "rgb(0, 229, 0)")
    (simulate ctx (make-cells))))

(set! (.-onload js/window) init)
