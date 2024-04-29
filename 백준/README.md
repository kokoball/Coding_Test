# 백준 문제 풀이 모음 및 개념 정리

세팅 참고 : https://github.com/haesoo-y/baekjoon-for-js

- 테스트 케이스는 test.txt에 작성하여 노드 환경에서 동작시킬 수 있습니다. (ex. node my-solution.js)
- 제출 시 경로는 test.txt에서 /dev/stdin으로 변경해야 정상적으로 채점이 이루어집니다.
- input변수에 각 라인을 나누어 배열로 저장합니다.
- extended 템플릿의 경우 solution 함수에 넣기 전 미리 정리하는 방식입니다. 이를 통해 다른 PS 플랫폼과 유사하게 문제를 풀 수 있습니다.
- 답이 한 줄일 경우 basic의 return처럼 작성합니다.
- 여러 줄일 경우 반드시 extended의 return과 같이 배열내에 답을 넣어 join('\n')으로 하나의 string으로 만들어야 합니다.

학습 순서 (핵심 개념)
- 누적합
- 구현
- 그래프이론
- DFS
- BFS
- 트리순회
- 완탐
- 백트래킹
- 비트마스킹
- 그리디
- 라인스위핑
- 투포인터
- LIS
- 이분탐색
- DP
- 최단거리
- 펜윅트리
