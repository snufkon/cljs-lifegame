(defproject cljs-lifegame "0.1.0-SNAPSHOT"
  :description "Sample program of the Life of Game written by ClojureScript"
  :url "https://github.com/snufkon/cljs-lifegame"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/cljs"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]]
  :plugins [[lein-cljsbuild "1.0.2"]]
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/main.js"
                           :optimizations :advanced
                           ;;:optimizations :whitespace
                           ;;:pretty-print true
                           }}]})
