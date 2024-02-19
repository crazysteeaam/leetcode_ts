/*
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */

// 66 ms 击败 98.69% 使用 TypeScript 的用户
// 59.58 MB 击败 24.08% 使用 TypeScript 的用户

function maxProfit(prices: number[]): number {
    let buy_in:number = prices[0]
    let profit:number = 0
    for (let i:number = 1; i < prices.length; i++) {
        if (prices[i] < buy_in) {
            buy_in = prices[i]
        } else if (prices[i] - buy_in > profit){
            profit = prices[i] - buy_in
        }
    }
    return profit
}

// let prices = [7,1,5,3,6,4]
let prices = [7,6,4,3,1]
console.log(maxProfit(prices))