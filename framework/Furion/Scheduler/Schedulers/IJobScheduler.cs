﻿// MIT License
//
// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd and Contributors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

namespace Furion.Scheduler;

/// <summary>
/// 作业调度计划接口
/// </summary>
public interface IJobScheduler
{
    /// <summary>
    /// 获取作业调度计划构建器
    /// </summary>
    /// <returns><see cref="JobScheduler"/></returns>
    JobSchedulerBuilder GetBuilder();

    /// <summary>
    /// 启动作业
    /// </summary>
    void Start();

    /// <summary>
    /// 暂停作业
    /// </summary>
    void Pause();

    /// <summary>
    /// 启动作业触发器
    /// </summary>
    void StartTrigger(string jobTriggerId);

    /// <summary>
    /// 暂停作业触发器
    /// </summary>
    void PauseTrigger(string jobTriggerId);

    /// <summary>
    /// 强制触发持久化操作
    /// </summary>
    void ForcePersist();
}