// Raw data mapped from Test Data.md
const coursesData = [
    {
        id: "che110",
        course: "CHE 110",
        totalCA: 40,
        tests: [
            { id: "che110-t1", name: "Attendance", details: "5 marks" },
            { id: "che110-t2", name: "CA 1", details: "Project Allotted (Part of 40 marks CA)" },
            { id: "che110-t3", name: "CA 2", details: "MCQ (Unit I to III -- 30 Question)" },
            { id: "che110-t4", name: "CA 3", details: "MCQ (Unit I to V -- 30 Question) (optional)" },
            { id: "che110-t5", name: "MTT", details: "MCQ Type (Weightage: 20 marks)" },
            { id: "che110-t6", name: "ETT", details: "MCQ Type (Weightage: 35 marks)" }
        ]
    },
    {
        id: "mth165",
        course: "MTH 165",
        totalCA: 25,
        tests: [
            { id: "mth165-t1", name: "Attendance", details: "5 marks" },
            { id: "mth165-t2", name: "CA 1", details: "Till Unit 2 (Part of 25 marks CA)" },
            { id: "mth165-t3", name: "CA 2", details: "--" },
            { id: "mth165-t4", name: "CA 3", details: "--" },
            { id: "mth165-t5", name: "MTT", details: "MCQ Type (Weightage: 20 marks)" },
            { id: "mth165-t6", name: "ETT", details: "MCQ + Subjective (Weightage: 50 marks)" }
        ]
    },
    {
        id: "ece131",
        course: "ECE 131",
        totalCA: 25,
        tests: [
            { id: "ece131-t1", name: "Attendance", details: "5 marks" },
            { id: "ece131-t2", name: "CA 1", details: "Till Unit 2 (Part of 25 marks CA)" },
            { id: "ece131-t3", name: "CA 2", details: "Project based" },
            { id: "ece131-t4", name: "CA 3", details: "Test" },
            { id: "ece131-t5", name: "MTT", details: "MCQ Type (Weightage: 20 marks)" },
            { id: "ece131-t6", name: "ETT", details: "MCQ + Subjective (Weightage: 50 marks)" }
        ]
    },
    {
        id: "ece132",
        course: "ECE 132",
        totalCA: 45,
        tests: [
            { id: "ece132-t1", name: "Attendance", details: "5 marks" },
            { id: "ece132-t2", name: "CAP - WTP 1", details: "Till Mid term (Part of 45 marks includes WTP & Practical copy)" },
            { id: "ece132-t3", name: "CAP - WTP 2", details: "Before End Term" },
            { id: "ece132-t4", name: "ETP", details: "Weightage: 50 marks" }
        ]
    },
    {
        id: "ece181",
        course: "ECE 181",
        totalCA: 25,
        tests: [
            { id: "ece181-t1", name: "Attendance", details: "5 marks" },
            { id: "ece181-t2", name: "CA 1", details: "3 Ques (Part of 25 marks CA)" },
            { id: "ece181-t3", name: "CA 2", details: "Python Project" },
            { id: "ece181-t4", name: "CA 3", details: "Subjective test covering CA 1 & CA 2 (optional)" },
            { id: "ece181-t5", name: "Practical Test", details: "3 Practical tests" },
            { id: "ece181-t6", name: "ETP", details: "Weightage: 50 marks" }
        ]
    },
    {
        id: "ece112",
        course: "ECE 112",
        totalCA: 65,
        tests: [
            { id: "ece112-t1", name: "Attendance", details: "5 marks" },
            { id: "ece112-t2", name: "CA 1", details: "Idea based (Part of 65 marks CA)" },
            { id: "ece112-t3", name: "CA 2", details: "Physical Robotic Based moveable project" },
            { id: "ece112-t4", name: "ETP", details: "Weightage: 30 marks -- upgrade the CA 2 project" }
        ]
    },
    {
        id: "cse111",
        course: "CSE 111",
        totalCA: 70,
        tests: [
            { id: "cse111-t1", name: "Attendance", details: "30 Marks" },
            { id: "cse111-t2", name: "CA 1", details: "Test (Weightage: 25% of 70 marks CA)" },
            { id: "cse111-t3", name: "CA 2", details: "Edu Revolution Task (Weightage: 25%)" },
            { id: "cse111-t4", name: "CA 3", details: "Assignment (Weightage: 25%)" },
            { id: "cse111-t5", name: "CA 4", details: "Design Your Dream CV (Weightage: 25%)" }
        ]
    },
    {
        id: "mec136",
        course: "MEC 136",
        totalCA: 25,
        tests: [
            { id: "mec136-t1", name: "Attendance", details: "5 marks" },
            { id: "mec136-t2", name: "CA 1", details: "Test (Weightage: 50% of 25 marks CA)" },
            { id: "mec136-t3", name: "CA 2", details: "Test (Weightage: 50%)" },
            { id: "mec136-t4", name: "CA 3", details: "Test: optional (Weightage: 50%)" },
            { id: "mec136-t5", name: "MTT", details: "Subjective (Weightage: 20 marks)" },
            { id: "mec136-t6", name: "ETT", details: "Subjective (Weightage: 50 marks)" }
        ]
    },
    {
        id: "mec139",
        course: "MEC 139",
        totalCA: 45,
        tests: [
            { id: "mec139-t1", name: "Attendance", details: "5 marks" },
            { id: "mec139-t2", name: "CAP", details: "Weightage: 45 marks (includes project file)" },
            { id: "mec139-t3", name: "ETP", details: "Weightage: 50 marks" }
        ]
    }
];

// App State
let userSettings = JSON.parse(localStorage.getItem('testTrackerData_ios')) || {};

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupScrollListener();
    setupModalListeners();
    setInterval(updateAllCountdowns, 60000); // Update countdowns every minute
});

function initApp() {
    const container = document.getElementById('course-container');
    container.innerHTML = '';
    
    const navContainer = document.getElementById('course-nav');
    if (navContainer) navContainer.innerHTML = '';

    coursesData.forEach(course => {
        const group = document.createElement('div');
        group.className = 'course-group';
        group.id = `course-group-${course.id}`;
        
        if (navContainer) {
            const btn = document.createElement('button');
            btn.className = 'course-nav-btn';
            btn.textContent = course.course;
            btn.setAttribute('data-target', course.id);
            btn.onclick = () => {
                const target = document.getElementById(`course-group-${course.id}`);
                const y = target.getBoundingClientRect().top + window.scrollY - 130; 
                window.scrollTo({top: y, behavior: 'smooth'});
            };
            navContainer.appendChild(btn);
        }
        
        group.innerHTML = `<div class="course-title">${course.course}</div>`;
        
        const list = document.createElement('div');
        list.className = 'ios-list';
        
        course.tests.forEach(test => {
            const testId = test.id;
            const savedData = userSettings[testId] || {};
            
            // Container for both the list item and its dropdown
            const itemContainer = document.createElement('div');
            
            const li = document.createElement('div');
            li.className = 'ios-list-item';
            if (savedData.date || savedData.syllabus || savedData.notes || savedData.weightage || savedData.isOptional) {
                li.classList.add('has-data');
            }
            
            const isAttendance = test.name.toLowerCase().includes('attendance');
            
            let badgesHtml = '';
            if (savedData.date) {
                const cdObj = calculateCountdown(savedData.date, savedData.time, savedData.endTime);
                if (cdObj) {
                    badgesHtml = `<div class="badge-container" id="badge-container-${testId}">`;
                    if (cdObj.timeHtml) {
                        badgesHtml += `<span class="badge-time">${cdObj.timeHtml}</span>`;
                    }
                    if (cdObj.daysHtml) {
                        badgesHtml += `<span class="badge">${cdObj.daysHtml}</span>`;
                    }
                    badgesHtml += `</div>`;
                }
            }

            li.innerHTML = `
                <div class="test-info">
                    <div class="test-name">${test.name}</div>
                    <div class="test-desc">${test.details}</div>
                </div>
                <div class="test-right">
                    ${badgesHtml}
                    ${!isAttendance ? '<i class="ph ph-caret-right chevron"></i>' : ''}
                </div>
            `;
            
            if (isAttendance) {
                li.style.cursor = 'default';
                li.classList.remove('has-data'); // Prevent border logic if any accidental data exists
            }
            
            // Dropdown for user data
            const dropdown = document.createElement('div');
            dropdown.className = 'user-info-dropdown';
            dropdown.id = `dropdown-${testId}`;
            
            let dpHtml = '';
            
            // Tags for new metadata
            let tagsHtml = '';
            if (savedData.weightage) {
                tagsHtml += `<span class="info-tag">Weight: ${savedData.weightage}%</span>`;
                // Calculate converted marks
                if (course.totalCA) {
                    const converted = (course.totalCA * (savedData.weightage / 100)).toFixed(1);
                    tagsHtml += `<span class="info-tag">Contributes: ${converted} Marks</span>`;
                }
            }
            if (savedData.totalMarks) {
                tagsHtml += `<span class="info-tag">Total Marks: ${savedData.totalMarks}</span>`;
            }
            if (savedData.negMarking) {
                tagsHtml += `<span class="info-tag" style="color:var(--text-primary); background:rgba(0,0,0,0.05);">Neg: ${savedData.negMarking}</span>`;
            }
            if (savedData.qType) {
                tagsHtml += `<span class="info-tag">${savedData.qType}</span>`;
                if ((savedData.qType === 'MCQ' || savedData.qType === 'Both') && savedData.mcqTotal) {
                    tagsHtml += `<span class="info-tag" style="background:rgba(0,0,0,0.05); color:#333;">MCQs: ${savedData.mcqAttempt || savedData.mcqTotal}/${savedData.mcqTotal}</span>`;
                }
                if ((savedData.qType === 'Subjective' || savedData.qType === 'Both') && savedData.subTotal) {
                    tagsHtml += `<span class="info-tag" style="background:rgba(0,0,0,0.05); color:#333;">Subj: ${savedData.subAttempt || savedData.subTotal}/${savedData.subTotal}</span>`;
                }
            }
            if (savedData.isOptional) {
                const optColor = savedData.isOptional === 'Optional' ? '#f59e0b' : '#3b82f6';
                tagsHtml += `<span class="info-tag" style="background:rgba(0,0,0,0.05); color:${optColor}; border: 1px solid ${optColor}; padding: 2px 6px;">${savedData.isOptional}</span>`;
            }
            
            if (tagsHtml) {
                dpHtml += `<div class="info-tags">${tagsHtml}</div>`;
            }

            if (savedData.date) {
                const timeStr = formatTimeFrame(savedData.time, savedData.endTime);
                dpHtml += `<div class="info-line"><span class="info-label">When:</span> <span class="info-text">${savedData.date} ${timeStr ? 'at ' + timeStr : ''}</span></div>`;
            }
            if (savedData.syllabus) {
                dpHtml += `<div class="info-line"><span class="info-label">Syllabus:</span> <span class="info-text">${savedData.syllabus}</span></div>`;
            }
            if (savedData.notes) {
                dpHtml += `<div class="info-line"><span class="info-label">Notes:</span> <span class="info-text">${savedData.notes}</span></div>`;
            }
            
            // Edit button inside dropdown
            dpHtml += `
                <div style="margin-top: 10px; text-align: right;">
                    <button style="color: var(--accent); background: none; border: none; font-size: 15px; font-weight: 500; cursor: pointer;" onclick="openModal('${course.id}', '${testId}')">Edit Details</button>
                </div>
            `;
            dropdown.innerHTML = dpHtml;

            // Click behavior
            if (!isAttendance) {
                li.addEventListener('click', () => {
                    if (savedData.date || savedData.syllabus || savedData.notes || savedData.weightage || savedData.isOptional) {
                        dropdown.classList.toggle('open');
                        
                        // Rotate chevron
                        const icon = li.querySelector('.chevron');
                        if (dropdown.classList.contains('open')) {
                            icon.style.transform = 'rotate(90deg)';
                        } else {
                            icon.style.transform = 'rotate(0deg)';
                        }
                    } else {
                        openModal(course.id, testId);
                    }
                });
            }

            itemContainer.appendChild(li);
            itemContainer.appendChild(dropdown);
            list.appendChild(itemContainer);
        });
        
        group.appendChild(list);
        container.appendChild(group);
    });

    setupScrollHighlighting();
}

function formatTime(timeStr) {
    if (!timeStr) return '';
    const [hStr, mStr] = timeStr.split(':');
    const h = parseInt(hStr, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const formattedH = h % 12 || 12;
    return `${formattedH}:${mStr} ${ampm}`;
}

function formatTimeFrame(startTime, endTime) {
    if (!startTime) return '';
    const startF = formatTime(startTime);
    const endF = formatTime(endTime);
    return endF ? `${startF} - ${endF}` : startF;
}

function calculateCountdown(dateStr, timeStr, endTimeStr) {
    if (!dateStr) return null;
    const targetDateStr = timeStr ? `${dateStr}T${timeStr}` : `${dateStr}T00:00:00`;
    const targetDate = new Date(targetDateStr);
    const now = new Date();
    const diff = targetDate - now;
    
    let timeHtml = formatTimeFrame(timeStr, endTimeStr);
    let daysHtml = '';
    
    if (diff < 0) {
        daysHtml = 'Passed';
    } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if (days > 0) daysHtml = `${days}d left`;
        else if (hours > 0) daysHtml = `${hours}h left`;
        else daysHtml = `<1h left`;
    }

    return { timeHtml, daysHtml };
}

function updateAllCountdowns() {
    coursesData.forEach(course => {
        course.tests.forEach(test => {
            const savedData = userSettings[test.id];
            if (savedData && savedData.date) {
                const container = document.getElementById(`badge-container-${test.id}`);
                if (container) {
                    const cdObj = calculateCountdown(savedData.date, savedData.time, savedData.endTime);
                    let html = '';
                    if (cdObj.timeHtml) html += `<span class="badge-time">${cdObj.timeHtml}</span>`;
                    if (cdObj.daysHtml) html += `<span class="badge">${cdObj.daysHtml}</span>`;
                    container.innerHTML = html;
                }
            }
        });
    });
}

// Sticky Nav Logic
function setupScrollListener() {
    const navBar = document.getElementById('nav-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('visible');
        } else {
            navBar.classList.remove('visible');
        }
    });
}

// Modal Logic
const modal = document.getElementById('edit-modal');
const form = document.getElementById('details-form');
const qTypeSelect = document.getElementById('test-q-type');
const mcqDetails = document.getElementById('mcq-details');
const subDetails = document.getElementById('sub-details');

function openModal(courseId, testId) {
    const course = coursesData.find(c => c.id === courseId);
    const test = course.tests.find(t => t.id === testId);
    
    document.getElementById('modal-title').textContent = `${test.name}`;
    document.getElementById('modal-course-id').value = courseId;
    document.getElementById('modal-test-id').value = testId;
    
    const savedData = userSettings[testId] || {};
    
    document.getElementById('test-date').value = savedData.date || '';
    document.getElementById('test-time').value = savedData.time || '';
    document.getElementById('test-end-time').value = savedData.endTime || '';
    
    document.getElementById('test-weightage').value = savedData.weightage || '';
    document.getElementById('test-marks').value = savedData.totalMarks || '';
    document.getElementById('test-neg-mark').value = savedData.negMarking || '';
    
    document.getElementById('test-syllabus').value = savedData.syllabus || '';
    document.getElementById('test-notes').value = savedData.notes || '';
    
    qTypeSelect.value = savedData.qType || '';
    document.getElementById('test-optional').value = savedData.isOptional || 'Mandatory';
    
    document.getElementById('mcq-total').value = savedData.mcqTotal || '';
    document.getElementById('mcq-attempt').value = savedData.mcqAttempt || '';
    document.getElementById('sub-total').value = savedData.subTotal || '';
    document.getElementById('sub-attempt').value = savedData.subAttempt || '';
    
    // Trigger change event to show/hide sections
    qTypeSelect.dispatchEvent(new Event('change'));
    
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function setupModalListeners() {
    document.getElementById('cancel-modal').addEventListener('click', closeModal);
    
    // Close when tapping outside the sheet
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });
    
    // Dynamic Form sections
    qTypeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'MCQ') {
            mcqDetails.style.display = 'block';
            subDetails.style.display = 'none';
        } else if (val === 'Subjective') {
            mcqDetails.style.display = 'none';
            subDetails.style.display = 'block';
        } else if (val === 'Both') {
            mcqDetails.style.display = 'block';
            subDetails.style.display = 'block';
        } else {
            mcqDetails.style.display = 'none';
            subDetails.style.display = 'none';
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const testId = document.getElementById('modal-test-id').value;
        
        const data = {
            date: document.getElementById('test-date').value,
            time: document.getElementById('test-time').value,
            endTime: document.getElementById('test-end-time').value,
            weightage: document.getElementById('test-weightage').value,
            totalMarks: document.getElementById('test-marks').value,
            negMarking: document.getElementById('test-neg-mark').value,
            syllabus: document.getElementById('test-syllabus').value,
            notes: document.getElementById('test-notes').value,
            qType: qTypeSelect.value,
            isOptional: document.getElementById('test-optional').value,
            mcqTotal: document.getElementById('mcq-total').value,
            mcqAttempt: document.getElementById('mcq-attempt').value,
            subTotal: document.getElementById('sub-total').value,
            subAttempt: document.getElementById('sub-attempt').value,
        };
        
        userSettings[testId] = data;
        localStorage.setItem('testTrackerData_ios', JSON.stringify(userSettings));
        localStorage.setItem('testTrackerData', JSON.stringify(userSettings)); // Sync
        
        closeModal();
        initApp(); // Re-render to show new data
    });
}

let scrollObserver = null;

function setupScrollHighlighting() {
    if (scrollObserver) {
        scrollObserver.disconnect();
    }
    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id.replace('course-group-', '');
                document.querySelectorAll('.course-nav-btn').forEach(btn => {
                    if (btn.getAttribute('data-target') === id) {
                        btn.classList.add('active');
                        const navContainer = document.getElementById('course-nav');
                        const btnRect = btn.getBoundingClientRect();
                        const navRect = navContainer.getBoundingClientRect();
                        if (btnRect.left < navRect.left || btnRect.right > navRect.right) {
                            btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                        }
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }
        });
    }, { rootMargin: '-130px 0px -60% 0px', threshold: 0 });

    document.querySelectorAll('.course-group').forEach(group => {
        scrollObserver.observe(group);
    });
}
