        const projects = [
            {
                id: 1,
                title: "新商品ラインナップ企画・販路拡大戦略会議",
                description: "春夏シーズン向け新商品の企画立案と既存取引先への提案準備",
                status: "進行中",
                startDate: "2026/01/10 14:00",
                updatedDate: "2026/02/15 16:45",
                endDate: "2026-03-31",
                team: "営業企画部",
                participants: [
                    { name: "山田", initial: "山" },
                    { name: "佐藤", initial: "佐" },
                    { name: "田中", initial: "田" },
                    { name: "鈴木", initial: "鈴" }
                ],
                tasks: [
                    {
                        id: 1,
                        title: "商品カタログデザイン制作",
                        description: "新商品ラインナップのカタログデザイン及び製作進行管理",
                        detailDescription: "春夏シーズン向けの新商品約50点を掲載するカタログのデザイン制作を進めます。デザイナーとの打ち合わせ、原稿校正、印刷手配まで一貫して管理し、展示会開催の2週間前までに納品できるよう進行します。取引先への配布用として5,000部を想定しています。",
                        priority: "high",
                        deadline: "2026-02-28",
                        status: "進行中",
                        estimatedHours: 60,
                        completionRate: 40,
                        assignee: { name: "田中", initial: "田" },
                        dependencies: ["商品撮影完了", "価格決定"],
                        tags: ["営業販促", "デザイン", "印刷物"],
                        background: "年2回の展示会に合わせて商品カタログを更新しています。今回は新規取引先開拓も視野に入れており、より訴求力の高いデザインが求められています。",
                        objectives: [
                            "商品の魅力が伝わるビジュアル表現",
                            "価格・仕様情報の正確な記載",
                            "ブランドイメージの統一",
                            "展示会2週間前までの納品",
                            "デジタル版も同時制作"
                        ],
                        deliverables: [
                            "印刷用カタログ（5,000部）",
                            "PDF版カタログ",
                            "Web掲載用画像データ",
                            "校正履歴記録"
                        ],
                        risks: [
                            { description: "商品撮影の遅延によるスケジュール圧迫", impact: "高", mitigation: "撮影スケジュールの前倒し調整" },
                            { description: "印刷会社の繁忙期と重なる可能性", impact: "中", mitigation: "早期発注と予備日程の確保" }
                        ],
                        resources: [
                            { name: "前回カタログデザイン資料", url: "https://example.com/catalog-previous", type: "参考資料" },
                            { name: "デザイン打ち合わせ議事録（2026-01-15）", url: "https://example.com/design-meeting", type: "議事録" },
                            { name: "商品仕様一覧", url: "https://example.com/product-specs", type: "仕様書" },
                            { name: "ブランドガイドライン", url: "https://example.com/brand-guide", type: "ガイドライン" }
                        ]
                    },
                    {
                        id: 2,
                        title: "展示会出展準備",
                        description: "業界展示会のブース設営計画と展示商品選定",
                        detailDescription: "3月開催の業界展示会に出展するためのブース設営計画を立案します。展示する商品の選定、ブースレイアウトの決定、装飾物の手配、当日運営スタッフのアサインなど、展示会成功に向けた総合的な準備を行います。",
                        priority: "high",
                        deadline: "2026-03-05",
                        status: "未着手",
                        estimatedHours: 80,
                        completionRate: 0,
                        assignee: { name: "佐藤", initial: "佐" },
                        dependencies: ["出展申し込み完了", "展示商品決定"],
                        tags: ["展示会", "営業", "イベント"],
                        background: "年に2回の業界展示会は新規取引先開拓の重要な機会です。前回は来場者数150名、商談件数30件の実績がありました。",
                        objectives: [
                            "魅力的なブースデザインの実現",
                            "主力商品と新商品のバランス良い展示",
                            "来場者との効果的な商談機会の創出",
                            "ブランドイメージの向上",
                            "商談件数40件以上の獲得"
                        ],
                        deliverables: [
                            "ブースレイアウト図",
                            "展示商品リスト",
                            "運営マニュアル",
                            "ノベルティ発注書"
                        ],
                        risks: [
                            { description: "新商品サンプルの製作遅延", impact: "高", mitigation: "製造部門との密な連携" },
                            { description: "装飾業者のスケジュール調整難", impact: "中", mitigation: "複数業者への相見積もり" }
                        ],
                        resources: [
                            { name: "前回展示会報告書", url: "https://example.com/exhibition-report", type: "レポート" },
                            { name: "ブース設営業者見積もり", url: "https://example.com/booth-estimate", type: "見積書" },
                            { name: "展示会企画会議議事録（2026-01-20）", url: "https://example.com/exhibition-planning", type: "議事録" }
                        ]
                    },
                    {
                        id: 3,
                        title: "既存取引先への新商品提案資料作成",
                        description: "主要取引先20社への提案用プレゼンテーション資料の作成",
                        detailDescription: "既存の主要取引先20社に対して新商品ラインナップを提案するための資料を作成します。各取引先の過去の発注傾向や好みを分析し、カスタマイズした提案内容を準備します。",
                        priority: "medium",
                        deadline: "2026-03-15",
                        status: "計画中",
                        estimatedHours: 50,
                        completionRate: 15,
                        assignee: { name: "鈴木", initial: "鈴" },
                        dependencies: ["商品価格決定", "在庫確認"],
                        tags: ["営業", "提案書", "既存顧客"],
                        background: "毎シーズン、既存取引先への新商品提案を行っています。提案の質を高めることで、発注率の向上を目指しています。",
                        objectives: [
                            "取引先ごとのカスタマイズ提案",
                            "発注率70%以上の達成",
                            "提案から発注までのリードタイム短縮",
                            "クロスセル提案の実施",
                            "取引先満足度の向上"
                        ],
                        deliverables: [
                            "提案用プレゼンテーション資料（20社分）",
                            "商品別販売予測データ",
                            "取引先別提案スケジュール",
                            "提案結果報告書"
                        ],
                        risks: [
                            { description: "商品価格の確定遅延", impact: "中", mitigation: "暫定価格での提案準備" },
                            { description: "競合他社の先行提案", impact: "中", mitigation: "提案スケジュールの前倒し" }
                        ],
                        resources: [
                            { name: "取引先別発注履歴データ", url: "https://example.com/order-history", type: "データ" },
                            { name: "提案資料テンプレート", url: "https://example.com/proposal-template", type: "テンプレート" },
                            { name: "営業戦略会議議事録（2026-02-01）", url: "https://example.com/sales-strategy", type: "議事録" }
                        ]
                    }
                ],
                timeline: [
                    {
                        date: "2026-01-10",
                        title: "キックオフミーティング",
                        description: "新商品企画プロジェクトの開始。営業企画部、製造部、デザイン部門が参加し、スケジュールと役割分担を確認",
                        completed: true,
                        resources: [
                            { name: "キックオフ資料", url: "https://example.com/kickoff-slides" },
                            { name: "議事録", url: "https://example.com/meeting-0110" }
                        ]
                    },
                    {
                        date: "2026-01-25",
                        title: "商品ラインナップ確定",
                        description: "春夏シーズン向け新商品50点のラインナップを確定。価格帯、ターゲット層、販売チャネルについて合意",
                        completed: true,
                        resources: [
                            { name: "商品ラインナップ一覧", url: "https://example.com/product-lineup" },
                            { name: "商品企画会議議事録", url: "https://example.com/product-planning" }
                        ]
                    },
                    {
                        date: "2026-02-15",
                        title: "カタログデザイン初稿完成",
                        description: "デザイナーからカタログの初稿が提出され、社内レビューを実施中",
                        completed: true,
                        resources: [
                            { name: "カタログ初稿PDF", url: "https://example.com/catalog-draft" },
                            { name: "デザインレビュー議事録", url: "https://example.com/design-review" }
                        ]
                    },
                    {
                        date: "2026-02-28",
                        title: "カタログ印刷発注",
                        description: "校正を完了し、印刷会社への発注を予定",
                        completed: false,
                        resources: []
                    },
                    {
                        date: "2026-03-15",
                        title: "展示会開催",
                        description: "業界展示会での新商品披露と商談実施",
                        completed: false,
                        resources: []
                    }
                ]
            },
            {
                id: 2,
                title: "在庫管理システム刷新・倉庫運用効率化検討会",
                description: "老朽化した在庫管理システムの更新と倉庫オペレーション改善",
                status: "企画中",
                startDate: "2026/01/20 10:30",
                updatedDate: "2026/02/14 11:20",
                endDate: "2026-06-30",
                team: "物流管理部",
                participants: [
                    { name: "伊藤", initial: "伊" },
                    { name: "渡辺", initial: "渡" },
                    { name: "高橋", initial: "高" },
                    { name: "中村", initial: "中" },
                    { name: "小林", initial: "小" }
                ],
                tasks: [],
                timeline: [
                    {
                        date: "2026-01-20",
                        title: "現状分析キックオフ",
                        description: "現行システムの課題抽出と改善要件の洗い出し",
                        completed: true,
                        resources: [
                            { name: "現状分析資料", url: "https://example.com/current-analysis" }
                        ]
                    },
                    {
                        date: "2026-02-14",
                        title: "ベンダー選定開始",
                        description: "在庫管理システムベンダー3社からの提案受付",
                        completed: true,
                        resources: []
                    }
                ]
            },
            {
                id: 3,
                title: "品質管理基準見直し・不良品率削減プロジェクト",
                description: "製造工程の品質管理基準の見直しと不良品率50%削減施策の実施",
                status: "完了",
                startDate: "2025/09/01 09:00",
                updatedDate: "2026/01/31 17:00",
                endDate: "2026-01-31",
                team: "品質管理部",
                participants: [
                    { name: "加藤", initial: "加" },
                    { name: "吉田", initial: "吉" },
                    { name: "森", initial: "森" }
                ],
                tasks: [],
                timeline: [
                    {
                        date: "2025-09-01",
                        title: "プロジェクト開始",
                        description: "品質管理基準の全面見直しプロジェクト発足",
                        completed: true,
                        resources: []
                    },
                    {
                        date: "2025-10-15",
                        title: "新基準策定完了",
                        description: "改訂版品質管理基準書の承認と現場への展開開始",
                        completed: true,
                        resources: [
                            { name: "新検査基準書", url: "https://example.com/inspection-standards" }
                        ]
                    },
                    {
                        date: "2026-01-31",
                        title: "不良品率50%削減達成",
                        description: "目標としていた不良品率50%削減を達成し、プロジェクト完了",
                        completed: true,
                        resources: [
                            { name: "最終報告書", url: "https://example.com/final-report" },
                            { name: "成果発表資料", url: "https://example.com/results-presentation" }
                        ]
                    }
                ]
            }
        ];

        let currentFilter = 'all';

        function renderProjects() {
            const list = document.getElementById('projectsList');
            const filteredProjects = currentFilter === 'all' 
                ? projects 
                : projects.filter(p => p.status === currentFilter);
            
            if (filteredProjects.length === 0) {
                list.innerHTML = '<div style="padding: 40px; text-align: center; color: #9ca3af; grid-column: 1/-1;">該当するプロジェクトがありません</div>';
                return;
            }
            
            list.innerHTML = filteredProjects.map(project => {
                const displayParticipants = project.participants.slice(0, 4);
                const remainingCount = project.participants.length - 4;
                
                return `
                    <div class="project-card-item" onclick="showProjectDetail(${project.id})">
                        <div class="project-card-header">
                            <div class="project-card-title">${project.title}</div>
                            <div class="project-card-badge badge-${project.status}">${project.status}</div>
                        </div>
                        <div class="project-card-meta">
                            <div class="project-card-date">更新: ${project.updatedDate}</div>
                            <div class="project-participants">
                                ${displayParticipants.map(p => `
                                    <div class="participant-avatar" title="${p.name}">${p.initial}</div>
                                `).join('')}
                                ${remainingCount > 0 ? `<div class="participant-more">+${remainingCount}</div>` : ''}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function filterProjects(status) {
            currentFilter = status;
            
            // タブのアクティブ状態を更新
            document.querySelectorAll('.filter-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');
            
            renderProjects();
        }

        function showProjectDetail(projectId) {
            const project = projects.find(p => p.id === projectId);
            if (!project) return;

            document.getElementById('detailTitle').textContent = project.title;
            
            const statusBadge = document.getElementById('detailStatus');
            statusBadge.textContent = project.status;
            statusBadge.className = `status-badge badge-${project.status}`;
            
            const displayParticipants = project.participants.slice(0, 4);
            const remainingCount = project.participants.length - 4;
            
            const participantsHTML = `
                <div class="detail-participants-label">👥 参加者:</div>
                <div class="detail-participants-avatars">
                    ${displayParticipants.map(p => `
                        <div class="participant-avatar" title="${p.name}">${p.initial}</div>
                    `).join('')}
                    ${remainingCount > 0 ? `<div class="participant-more">+${remainingCount}</div>` : ''}
                </div>
            `;
            
            document.getElementById('detailMeta').innerHTML = `
                <div class="detail-meta-item">
                    <span>📅</span>
                    <span>期間: ${project.startDate} 〜 ${project.endDate}</span>
                </div>
                <div class="detail-participants">
                    ${participantsHTML}
                </div>
            `;

            document.getElementById('tasksList').innerHTML = project.tasks.map((task, index) => `
                <div class="task-card" id="task-${task.id}">
                    <div class="task-checkbox" onclick="toggleTask(event, ${task.id})"></div>
                    <div class="task-content" onclick="showTaskDetail(${project.id}, ${task.id})">
                        <div class="task-header">
                            <div class="task-title">${task.title}</div>
                            <div class="task-actions">
                                ${task.assignee ? `
                                    <div class="task-assignee" style="display: flex; align-items: center; gap: 8px; margin-right: 12px;">
                                        <div class="assignee-avatar" style="width: 28px; height: 28px; border-radius: 50%; background: ${
                                            index === 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
                                            index === 1 ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                                            index === 2 ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' :
                                            index === 3 ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' :
                                            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                                        }; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                                            ${task.assignee.initial}
                                        </div>
                                        <span style="font-size: 13px; color: #4b5563;">${task.assignee.name}</span>
                                    </div>
                                ` : ''}
                                <span class="task-priority priority-${task.priority}">
                                    ${task.priority === 'high' ? '高' : task.priority === 'medium' ? '中' : '低'}
                                </span>
                            </div>
                        </div>
                        <div class="task-footer">
                            <div class="task-meta">
                                <span class="task-deadline">期限: ${task.deadline}</span>
                                <span class="task-progress-info">進捗: ${task.completionRate}%</span>
                                <span class="task-progress-info">${task.estimatedHours}h</span>
                            </div>
                        </div>
                    </div>
                    <button class="task-outsource-button" onclick="event.stopPropagation(); handleOutsource('${task.title}')">案件化</button>
                </div>
            `).join('');

            document.getElementById('historyTimeline').innerHTML = project.timeline.map(item => `
                <div class="timeline-item">
                    <div class="timeline-dot ${item.completed ? 'completed' : ''}"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${item.date}</div>
                        <div class="timeline-title">${item.title}</div>
                        <div class="timeline-description">${item.description}</div>
                        ${item.resources && item.resources.length > 0 ? `
                            <div class="history-resources">
                                <div class="resources-label">参考資料:</div>
                                <div class="resource-links">
                                    ${item.resources.map(res => {
                                        if (res.name.includes('議事録')) {
                                            return `<a href="#" onclick="event.preventDefault(); showMinutes('${res.name}', '${item.title}'); return false;" class="resource-link">📎 ${res.name}</a>`;
                                        } else {
                                            return `<a href="${res.url}" target="_blank" class="resource-link">📎 ${res.name}</a>`;
                                        }
                                    }).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('');

            document.getElementById('projectsListPage').style.display = 'none';
            document.getElementById('projectDetailPage').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showTaskDetail(projectId, taskId) {
            const project = projects.find(p => p.id === projectId);
            const task = project.tasks.find(t => t.id === taskId);
            if (!task) return;

            document.getElementById('modalTaskTitle').textContent = task.title;
            
            const priorityElement = document.getElementById('modalTaskPriority');
            priorityElement.className = `task-priority priority-${task.priority}`;
            priorityElement.textContent = task.priority === 'high' ? '高' : task.priority === 'medium' ? '中' : '低';
            
            document.getElementById('modalTaskStatus').textContent = task.status;
            
            document.getElementById('modalTags').innerHTML = task.tags.map(tag => 
                `<span class="task-tag">${tag}</span>`
            ).join('');
            
            document.getElementById('modalDependencies').innerHTML = task.dependencies.map(dep => 
                `<li>${dep}</li>`
            ).join('');
            
            document.getElementById('modalBackground').textContent = task.background;
            document.getElementById('modalContent').textContent = task.detailDescription;
            
            document.getElementById('modalObjectives').innerHTML = task.objectives.map(obj => 
                `<li>${obj}</li>`
            ).join('');
            
            document.getElementById('modalDeliverables').innerHTML = task.deliverables.map(del => 
                `<li>${del}</li>`
            ).join('');
            
            document.getElementById('modalRisks').innerHTML = task.risks.map(risk => `
                <div class="risk-item impact-${risk.impact === '高' ? 'high' : risk.impact === '中' ? 'medium' : 'low'}">
                    <div class="risk-header">
                        <span class="risk-impact impact-${risk.impact === '高' ? 'high' : risk.impact === '中' ? 'medium' : 'low'}">
                            影響度: ${risk.impact}
                        </span>
                    </div>
                    <div class="risk-description">${risk.description}</div>
                    <div class="risk-mitigation">${risk.mitigation}</div>
                </div>
            `).join('');

            document.getElementById('modalResources').innerHTML = task.resources.map(resource => `
                <div class="task-resource-item">
                    <div class="task-resource-name">
                        <span>📄</span>
                        <div>
                            ${resource.name}
                            <span class="task-resource-type">${resource.type}</span>
                        </div>
                    </div>
                    <a href="${resource.url}" target="_blank" class="task-resource-link-btn">開く</a>
                </div>
            `).join('');

            window.currentProjectId = projectId;
            document.getElementById('taskDetailModal').classList.add('visible');
        }

        function closeTaskDetail() {
            document.getElementById('taskDetailModal').classList.remove('visible');
        }

        function backToList() {
            document.getElementById('projectsListPage').style.display = 'block';
            document.getElementById('projectDetailPage').style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function handleTaskAction(taskTitle) {
            alert(taskTitle ? `「${taskTitle}」を案件化します` : 'タスクを案件化します');
        }

        function toggleTask(event, taskId) {
            event.stopPropagation();
            const taskCard = document.getElementById(`task-${taskId}`);
            const checkbox = event.target;
            
            checkbox.classList.toggle('checked');
            taskCard.classList.toggle('completed');
        }

        function handleOutsource(taskTitle) {
            if (confirm(`「${taskTitle}」を案件化しますか？\n\n案件化すると外部パートナーや追加リソースに依頼できます。`)) {
                alert(`「${taskTitle}」を案件化しました。`);
                // ここに案件化処理を追加
            }
        }

        function showMinutes(title, eventTitle) {
            document.getElementById('minutesTitle').textContent = title;
            
            // ダミーの議事録要約
            const dummySummary = `会議では、${eventTitle}について議論しました。

主な議題:
- プロジェクトの進捗状況の確認
- 次のフェーズに向けた課題の洗い出し
- チーム間の連携強化について
- スケジュールの調整と優先順位の見直し

決定事項:
1. 開発スケジュールを2週間前倒しで進める
2. デザインレビューを週次で実施する
3. 外部パートナーとの定例会議を設定する

次回アクション:
- 各チームリーダーは進捗レポートを作成
- デザインチームはモックアップの最終版を準備
- 開発チームは技術検証を完了させる

参加者全員が合意し、次回会議は2週間後に開催することが決定されました。`;

            document.getElementById('minutesSummary').textContent = dummySummary;
            document.getElementById('minutesModal').classList.add('visible');
        }

        function closeMinutes() {
            document.getElementById('minutesModal').classList.remove('visible');
        }

        // 初期表示
        renderProjects();

        // モーダル外クリックで閉じる
        document.getElementById('taskDetailModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeTaskDetail();
            }
        });

        document.getElementById('minutesModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeMinutes();
            }
        });
