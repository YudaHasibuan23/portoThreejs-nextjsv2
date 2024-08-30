import React from "react"
import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={500}
      height={500}
      viewBox="0 0 375 375"
      fill="none"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="none"
        d="M80.441 172.348c-.09 2.086-.148 4.191-.117 6.293a35.22 35.22 0 0 0-1.25 2.601c.332-3.008.797-5.98 1.367-8.894Zm42.98-65.871c-1.91 2.132-3.64 4.507-5.218 7.093-3.598 1.801-6.906 3.754-9.914 5.86a106.233 106.233 0 0 1 15.133-12.953Zm137.54 12.937c-3.008-2.105-6.332-4.074-9.926-5.86a47.494 47.494 0 0 0-5.265-7.152 105.978 105.978 0 0 1 13.96 11.72c.418.405.825.855 1.23 1.292Zm27.969 59.211c.043-2.133-.016-4.234-.121-6.34.57 2.914 1.007 5.844 1.34 8.82a30.317 30.317 0 0 0-1.22-2.48Zm-.422 36.691c-.227-4.011-1.356-7.918-3.34-11.718 1.984-6.989 3.203-14.094 3.61-21.2a27.765 27.765 0 0 1 2 7.782c.015.976.062 1.968.062 2.96 0 7.544-.797 14.965-2.332 22.176Zm-31.172 55.114c.258-.38.484-.77.707-1.16.844-.63 1.656-1.29 2.484-1.954-.273.274-.527.575-.797.844-.785.781-1.597 1.516-2.394 2.27Zm-148.672-3.172c.828.676 1.656 1.351 2.496 1.984.227.39.469.781.723 1.172-.797-.754-1.594-1.488-2.375-2.254-.29-.3-.559-.601-.844-.902ZM90.988 168.14c.09 6.91.961 14 2.676 21.242.137.543.273 1.082.406 1.625-.96.84-1.879 1.695-2.75 2.566-2.648 2.645-4.832 5.38-6.515 8.16a95.982 95.982 0 0 1-3.235-21.636c2.153-4.207 5.325-8.22 9.418-11.957ZM85.121 156c2.063-3.969 5.055-7.723 8.86-11.21-1.91 6.73-2.918 13.776-3.008 21.034a67.683 67.683 0 0 0-2.965 2.735c-2.617 2.629-4.766 5.304-6.496 8.054.015-4.148.316-8.277.886-12.379A106.912 106.912 0 0 1 85.121 156Zm16.203-28.61a71.64 71.64 0 0 0-2.062 3.817c-.813.707-1.594 1.398-2.332 2.133a96.577 96.577 0 0 1 4.394-5.95Zm12.906-5.964c-4.77 2.418-9.011 5.062-12.668 7.902a78.197 78.197 0 0 1 3.81-6.219c3.398-2.78 7.339-5.347 11.718-7.648a58.781 58.781 0 0 0-2.86 5.965Zm22.762-13.899a54.814 54.814 0 0 0-2.437 6.012c-3.04.887-5.989 1.863-8.848 2.914-3.488 1.309-6.754 2.692-9.824 4.176a54.766 54.766 0 0 1 3.16-6.172c5.402-2.676 11.434-5.004 17.95-6.93Zm-8.262-4.582a99.95 99.95 0 0 1 4.711-2.75c3.563-1.636 7.43-3.093 11.524-4.34-2.828 2.883-5.25 6.293-7.281 10.247-6.29 1.816-12.172 3.996-17.48 6.492 2.448-3.727 5.308-6.957 8.526-9.649Zm18.083-8.863c-.27.059-.54.133-.813.227.332-.137.664-.258.996-.38-.062.048-.121.09-.184.153ZM165 90.355c-5.445.707-10.695 1.727-15.676 3.036a.803.803 0 0 0 .031-.332 104.341 104.341 0 0 1 17.09-4.446A14.88 14.88 0 0 0 165 90.355Zm54.926 3.004a125.668 125.668 0 0 0-15.692-3.035 15.94 15.94 0 0 0-1.398-1.71 106.452 106.452 0 0 1 17.074 4.402.52.52 0 0 0 .016.343Zm2.449.66c-.043-.042-.105-.09-.164-.148.332.137.676.254 1.008.39-.27-.073-.555-.163-.844-.241Zm30.992 26.583a117.325 117.325 0 0 0-9.808-4.165 143.033 143.033 0 0 0-8.848-2.914 57.346 57.346 0 0 0-2.45-6.023c6.512 1.938 12.544 4.25 17.93 6.941a53.116 53.116 0 0 1 3.176 6.16Zm10.485 2.46a75.761 75.761 0 0 1 3.82 6.223c-3.656-2.824-7.883-5.469-12.652-7.875a56.27 56.27 0 0 0-2.872-5.976c4.375 2.312 8.301 4.851 11.704 7.629Zm6.105 8.102a65.935 65.935 0 0 0-2.09-3.906 116.024 116.024 0 0 1 4.528 6.097 55.086 55.086 0 0 0-2.438-2.19Zm11.313 37.395a75.794 75.794 0 0 0-2.977-2.75c-.106-7.332-1.129-14.438-3.07-21.23 3.808 3.519 6.8 7.304 8.89 11.316a101.61 101.61 0 0 1 2.754 8.43c.57 4.07.86 8.155.871 12.273-1.715-2.75-3.863-5.422-6.468-8.04Zm-3.668 25.015a46.831 46.831 0 0 0-2.485-2.312c.168-.63.332-1.262.469-1.88 1.73-7.241 2.601-14.331 2.676-21.23a39.312 39.312 0 0 1 1.746 1.668c3.324 3.309 5.883 6.746 7.687 10.262-.242 7.379-1.37 14.77-3.355 22.043-1.715-2.93-3.973-5.785-6.738-8.55Zm2.359 21.262c-1.625-2.734-3.746-5.379-6.316-7.965a77.798 77.798 0 0 0-2.723-2.523c1.504-3.922 2.812-7.856 3.879-11.809.664.617 1.324 1.23 1.972 1.863 3.024 3.02 5.399 6.145 7.13 9.332a101.583 101.583 0 0 1-3.942 11.102Zm7.328 4.117a94.752 94.752 0 0 1-3.297 7.781c-.344-3.62-1.441-7.164-3.308-10.62 1.55-3.575 2.89-7.184 4.003-10.848 1.79 3.77 2.692 7.648 2.692 11.597 0 .692-.031 1.399-.09 2.09Zm-3.191 10.23a88.465 88.465 0 0 0 1.566-3.23c-.512 1.55-1.039 3.067-1.61 4.598.032-.465.044-.899.044-1.367Zm-46.274 49.825a14.613 14.613 0 0 0 1.16-5.258c6.907-3.594 14.082-8.207 20.895-14.02-.195 2.961-1.129 5.891-2.723 8.73-5.988 4.403-12.605 7.888-19.332 10.548Zm-10.304 11.207c-.09.031-.18.074-.27.09 1.55-.993 2.98-2.012 4.258-3.11a68.77 68.77 0 0 0 6.453-2.285 107.77 107.77 0 0 1-10.441 5.305Zm-89.899-3.063a34.254 34.254 0 0 0 4.125 3.063c-.031 0-.062-.016-.094-.027a103.902 103.902 0 0 1-10.41-5.305 68.3 68.3 0 0 0 6.38 2.27Zm-28.25-27.422c6.817 5.801 13.988 10.41 20.895 14.004a14.723 14.723 0 0 0 1.129 5.258c-6.711-2.676-13.329-6.144-19.317-10.547-1.594-2.84-2.527-5.77-2.707-8.715Zm-24.234-30.59c0 .465.031.915.043 1.395a111.637 111.637 0 0 1-1.637-4.7 66.313 66.313 0 0 0 1.594 3.306Zm13.191-24.808c-.945.844-1.863 1.668-2.723 2.54-2.585 2.57-4.675 5.23-6.3 7.933a100.547 100.547 0 0 1-4.063-11.477c2.18-3.89 5.281-7.59 9.16-11.043a118.88 118.88 0 0 0 3.926 12.047Zm12.817-23.105a164.956 164.956 0 0 0 3.07 12.71c-5.672 2.84-10.695 6.055-14.922 9.586a117.831 117.831 0 0 1-3.898-12.097c4.378-3.738 9.675-7.149 15.75-10.2Zm-.63-47.645c-1.234 5.68-1.972 11.809-2.105 18.375-.031.828-.015 1.652-.015 2.48-6.153 3.063-11.614 6.536-16.204 10.352.196-7.453 1.356-14.648 3.489-21.516 4.168-3.53 9.164-6.777 14.836-9.691Zm.344-1.594c-5.52 2.797-10.394 5.875-14.515 9.18a78.3 78.3 0 0 1 3.894-9.285c3.793-3.246 8.305-6.219 13.407-8.895a72.09 72.09 0 0 0-2.786 9Zm21-8.144a138.395 138.395 0 0 0-12.379 4.254 128.07 128.07 0 0 0-7.222 3.199c.812-3.2 1.793-6.266 2.949-9.117 5.656-2.84 12.02-5.305 18.895-7.348a75.197 75.197 0 0 0-2.243 9.012Zm26.403-14.168a130.076 130.076 0 0 0-1.145 8.836c-8.379 1.156-16.441 2.808-23.992 4.957.633-3.23 1.414-6.235 2.36-9.043 7.1-2.043 14.745-3.637 22.777-4.75Zm1.445-6.969a87.312 87.312 0 0 0-1.25 5.785c-7.836 1.067-15.402 2.613-22.52 4.625a54.761 54.761 0 0 1 2.56-6.039c6.632-1.879 13.76-3.351 21.21-4.371Zm24.324-2.84c-7.808.016-15.465.508-22.789 1.442 1.156-3.98 2.617-7.332 4.36-9.84 5.972-.781 12.14-1.188 18.43-1.219Zm23.992 1.442c-7.34-.934-14.996-1.426-22.82-1.442V90.25c6.32.016 12.488.422 18.414 1.172 1.774 2.523 3.219 5.875 4.406 9.887Zm2.77 7.168c-.36-2.016-.766-3.954-1.25-5.786 7.465 1.02 14.578 2.493 21.21 4.371a55.065 55.065 0 0 1 2.575 6.055c-7.129-2.027-14.683-3.574-22.535-4.64Zm25.332 14.949c-7.492-2.121-15.54-3.785-23.977-4.946-.3-3.046-.68-5.992-1.16-8.804 8.047 1.097 15.692 2.707 22.79 4.734a72.86 72.86 0 0 1 2.347 9.016Zm20.867 7.797c-5.914-2.856-12.488-5.348-19.601-7.422-.602-3.2-1.34-6.176-2.243-8.985 6.891 2.059 13.239 4.508 18.895 7.332 1.156 2.856 2.137 5.891 2.95 9.075Zm1.399.675c-.77-3.14-1.7-6.113-2.786-8.925 5.102 2.66 9.598 5.636 13.391 8.882a75.606 75.606 0 0 1 3.879 9.196c-4.148-3.32-9.023-6.403-14.484-9.153Zm2.48 22.524c0-.813 0-1.637-.016-2.465-.148-6.64-.886-12.86-2.148-18.602 5.656 2.903 10.648 6.16 14.8 9.708 2.169 6.94 3.372 14.199 3.567 21.71-4.601-3.8-10.05-7.273-16.203-10.351Zm-5.836 39.516a155.626 155.626 0 0 0 3.04-12.547c6.093 3.082 11.37 6.52 15.718 10.277a115.02 115.02 0 0 1-3.82 11.871c-4.243-3.547-9.266-6.746-14.938-9.601Zm9.824 21.257c-3.941-3.289-8.605-6.277-13.87-8.922a162.55 162.55 0 0 0 3.714-11.195c5.656 2.856 10.637 6.07 14.82 9.617a129.657 129.657 0 0 1-4.664 10.5Zm9.551 10.895c-1.547-2.645-3.578-5.23-6.09-7.754a56.452 56.452 0 0 0-2.543-2.344 129.445 129.445 0 0 0 4.692-10.472c.797.722 1.597 1.445 2.332 2.18 2.754 2.765 4.933 5.59 6.574 8.503a107.736 107.736 0 0 1-4.965 9.887Zm-61.242 55.832a8.557 8.557 0 0 0-.719-2.645c8.543-3.289 16.531-7.3 23.887-11.988.934 1.863 1.414 3.785 1.46 5.754-9.237 4.73-17.96 7.586-24.628 8.879Zm-.434 3.5c.27-.735.422-1.516.465-2.297 6.637-1.293 15.317-4.086 24.567-8.762-.137 1.774-.633 3.532-1.473 5.23-8.11 3.052-16.262 4.958-23.559 5.829Zm-5.988 6.672a19.183 19.183 0 0 0 2.785-2.09c6.074.406 12.664-.328 19.164-2.012-1.777 1.293-3.793 2.508-5.972 3.606-5.024 1.218-9.07 1.246-15.977.496Zm-36.418 3.351c4.254 1.23 9.16 1.938 14.29 1.938a57.36 57.36 0 0 0 7.327-.465c.782.766 1.594 1.394 2.422 1.863-3.219.285-6.469.45-9.75.45-7.191 0-14.277-.723-21.18-2.102 2.407-.211 4.633-.77 6.891-1.684Zm-10.562-5.441a19.183 19.183 0 0 0 2.785 2.09c-6.953.75-11 .722-16.055-.512-2.18-1.098-4.18-2.297-5.957-3.605 6.516 1.699 13.133 2.433 19.227 2.027Zm-3.715-6.879c.043.766.195 1.547.465 2.297-7.293-.887-15.465-2.777-23.57-5.844-.844-1.7-1.34-3.441-1.462-5.215 9.239 4.66 17.918 7.469 24.567 8.762Zm-23.153-15.867c7.372 4.719 15.36 8.73 23.903 12.004a8.16 8.16 0 0 0-.735 2.66c-6.664-1.309-15.375-4.16-24.625-8.895.043-1.984.555-3.906 1.457-5.77Zm-38.722-39.996c-1.73 3.246-2.739 6.582-3.008 10.008-1.73-2.676-3.356-5.442-4.844-8.387.047-3.906 1.024-7.707 2.844-11.356a106.6 106.6 0 0 0 5.008 9.735Zm9.312-11.285a56.155 56.155 0 0 0-2.57 2.359c-2.5 2.512-4.531 5.094-6.078 7.738a107.313 107.313 0 0 1-4.95-9.87c2.106-3.77 5.114-7.349 8.891-10.684 1.399 3.5 2.961 7.003 4.707 10.457Zm14.79-9.72c-5.282 2.645-9.946 5.634-13.887 8.923a129.352 129.352 0 0 1-4.664-10.485c4.136-3.488 9.132-6.703 14.835-9.57a161.663 161.663 0 0 0 3.715 11.133Zm16.757-19.023c.813 3.801 1.73 7.649 2.754 11.512-6.71 1.938-12.894 4.281-18.46 6.984a172.746 172.746 0 0 1-3.7-11.132c5.808-2.825 12.336-5.305 19.406-7.364Zm-2.648-14.21a242.47 242.47 0 0 0 2.379 13.011c-7.059 2.043-13.602 4.504-19.47 7.375a164.786 164.786 0 0 1-3.066-12.726c6.047-2.946 12.817-5.528 20.157-7.66Zm-2.27-25.079c.149 7.512.856 15.52 2.09 23.86-7.328 2.117-14.11 4.672-20.219 7.648-1.535-8.055-2.347-15.988-2.437-23.605 6.152-3.036 13.058-5.68 20.566-7.903Zm.406-14.199c-.347 3.922-.484 8.055-.453 12.336-7.402 2.164-14.289 4.777-20.504 7.77 0-.618 0-1.25.016-1.864.148-6.836.934-13.238 2.285-19.097 5.942-2.93 12.563-5.516 19.754-7.676a99.656 99.656 0 0 0-1.098 8.531Zm25.707 6.867c-8.785 1.188-17.164 2.914-24.988 5.125-.027-4.074.121-8.054.453-11.902.27-3.14.676-6.145 1.172-8.969 7.54-2.207 15.649-3.937 24.133-5.125-.59 6.735-.813 13.883-.77 20.871Zm27.801-22.793v20.93c-9.207.031-18.203.633-26.836 1.742-.015-7.453.254-14.496.84-20.898a205.543 205.543 0 0 1 25.996-1.774Zm0-9.902v8.73c-8.77.032-17.465.618-25.875 1.715.317-3.097.707-6.07 1.203-8.82 7.899-1.04 16.172-1.594 24.672-1.625Zm0-1.188c-8.363.032-16.547.575-24.46 1.594.39-2.027.827-3.965 1.308-5.77 7.445-.976 15.21-1.488 23.152-1.515Zm1.172 0v-5.69c7.961.026 15.723.538 23.168 1.5.496 1.804.918 3.741 1.309 5.784a197.623 197.623 0 0 0-24.477-1.594Zm0 9.918v-8.73c8.516.016 16.79.574 24.703 1.61a127.4 127.4 0 0 1 1.188 8.804c-8.29-1.082-16.985-1.652-25.89-1.684Zm26.856 23.844c-8.621-1.125-17.633-1.726-26.856-1.742v-20.93c8.969.032 17.676.633 26.012 1.715.601 6.414.87 13.492.844 20.957Zm25.511-6.656c.332 3.848.465 7.828.438 11.902-7.809-2.21-16.188-3.937-24.973-5.125.031-7.015-.18-14.183-.781-20.945 8.512 1.172 16.59 2.871 24.098 5.02.527 2.898.933 5.949 1.218 9.148Zm1.61 12.246c.047-4.281-.106-8.414-.438-12.336-.27-3.035-.644-5.918-1.125-8.7 7.188 2.134 13.809 4.688 19.735 7.618 1.37 5.938 2.168 12.399 2.332 19.324.015.614 0 1.246.015 1.864-6.215-3.008-13.101-5.606-20.52-7.77Zm-2.153 25.828c1.266-8.398 1.973-16.453 2.121-24.023 7.461 2.207 14.368 4.867 20.551 7.933-.074 7.66-.918 15.668-2.453 23.782-6.09-2.989-12.89-5.559-20.219-7.692Zm-2.543 14.137a236.407 236.407 0 0 0 2.364-12.89c.886.257 1.789.495 2.68.765 6.347 2 12.183 4.312 17.464 6.914a161.3 161.3 0 0 1-3.023 12.574c-5.883-2.855-12.41-5.332-19.485-7.363Zm-3.007 12.7a246.65 246.65 0 0 0 2.753-11.556c7.055 2.028 13.57 4.508 19.407 7.36a174.437 174.437 0 0 1-3.7 11.195c-5.566-2.703-11.765-5.062-18.46-7Zm14.457 16.855a166.765 166.765 0 0 1-7.852 15.492c-4.512-2.211-9.539-4.117-14.969-5.696 1.61-4.343 3.145-8.82 4.575-13.386a317.232 317.232 0 0 0 3.503-12.11c6.649 1.907 12.801 4.235 18.34 6.942-1.129 2.945-2.304 5.875-3.597 8.758Zm4.152 23.093c-3.129-2.597-6.813-4.972-10.953-7.078a172.233 172.233 0 0 0 7.883-15.535 157.523 157.523 0 0 0 3.566-8.715c5.219 2.645 9.84 5.621 13.719 8.895-3.926 7.71-8.696 15.238-14.215 22.433Zm2.934 2.66a41.342 41.342 0 0 0-2.047-1.894c5.523-7.18 10.304-14.695 14.246-22.402.785.707 1.55 1.398 2.258 2.12 2.632 2.63 4.707 5.317 6.242 8.083-.406.707-.813 1.414-1.235 2.101a113.833 113.833 0 0 1-14.351 18.575c-1.293-2.27-2.992-4.45-5.113-6.583Zm-19.797 19.711c-.407-.39-.844-.78-1.278-1.156 6.453-5.723 12.559-12.2 18.082-19.203.075-.102.149-.223.223-.312.68.585 1.324 1.187 1.926 1.785 2.152 2.148 3.836 4.375 5.101 6.64-6.093 6.266-12.968 11.871-20.504 16.77-.902-1.547-2.09-3.05-3.55-4.524Zm-23.153 14.86c-.09-.09-.164-.149-.254-.223 7.235-3.953 14.41-9.062 21.239-15.012.468.391.918.797 1.34 1.22 1.398 1.41 2.527 2.85 3.402 4.323-7.371 4.704-15.36 8.715-23.906 11.993a12.062 12.062 0 0 0-1.82-2.301Zm-71.906-15.266c6.844 5.965 14.035 11.074 21.27 15.027-.09.09-.18.149-.254.239a12.82 12.82 0 0 0-1.836 2.3c-8.543-3.277-16.516-7.304-23.887-11.992 1.14-1.964 2.734-3.828 4.707-5.574Zm-19.18-20.281c.09.105.164.226.254.328 5.508 7.004 11.614 13.48 18.067 19.188-.434.39-.871.78-1.293 1.171-1.457 1.457-2.649 2.977-3.551 4.524-7.52-4.899-14.395-10.516-20.488-16.77 1.64-2.972 4.015-5.812 7.011-8.441Zm-.707-.934a41.6 41.6 0 0 0-2.047 1.91c-2.136 2.118-3.82 4.313-5.113 6.551a111.159 111.159 0 0 1-14.336-18.543c-.437-.687-.828-1.394-1.25-2.101 2-3.606 4.875-7.016 8.5-10.203 3.957 7.695 8.723 15.207 14.246 22.386Zm3.973-23.363a169.418 169.418 0 0 0 7.867 15.523c-4.137 2.118-7.824 4.493-10.937 7.075-5.52-7.18-10.305-14.707-14.23-22.418 3.85-3.23 8.468-6.203 13.734-8.848 1.113 2.914 2.3 5.8 3.566 8.668Zm19.328-4.07a293.583 293.583 0 0 0 4.559 13.386c-5.43 1.563-10.453 3.485-14.969 5.696a170.703 170.703 0 0 1-7.852-15.492 163.446 163.446 0 0 1-3.566-8.73c5.492-2.657 11.645-5 18.34-6.927 1.066 3.985 2.21 8.024 3.488 12.067Zm18.64-16.68c1.188 9.094 2.571 17.957 4.106 26.266-5.941.812-11.613 1.968-16.922 3.441a279.858 279.858 0 0 1-8.093-25.437c6.511-1.832 13.523-3.262 20.91-4.27Zm-1.534-13.008c.406 3.95.87 7.918 1.367 11.824-7.387.989-14.457 2.418-21.059 4.266a247.772 247.772 0 0 1-2.754-11.508c6.98-1.953 14.516-3.515 22.446-4.582Zm-1.325-14.515c.211 2.75.422 5.273.633 7.496.164 1.937.36 3.89.57 5.832-7.94 1.05-15.523 2.597-22.593 4.566a234.232 234.232 0 0 1-2.395-13.027c7.403-2.086 15.39-3.727 23.785-4.867Zm-.074-1.172c-8.394 1.113-16.414 2.734-23.89 4.836-1.235-8.114-1.985-16.149-2.122-23.871 7.747-2.227 16.13-3.985 24.973-5.184.074 8.727.527 17.172 1.04 24.219Zm26.746-1.79c-8.847.016-17.496.587-25.8 1.653-.602-8.309-.961-16.465-1.024-24.219 8.563-1.14 17.559-1.726 26.824-1.758Zm26.989 1.7a205.573 205.573 0 0 0-25.817-1.7v-24.324c9.223.016 18.234.618 26.856 1.743-.063 7.77-.422 15.941-1.04 24.28Zm.96.121c.512-7.063.95-15.508 1.04-24.281 8.785 1.187 17.164 2.93 24.972 5.168-.152 7.754-.902 15.851-2.137 24.011-7.46-2.12-15.48-3.773-23.875-4.898Zm-1.277 14.469c.195-1.942.39-3.895.57-5.832.196-2.207.407-4.703.618-7.438 8.289 1.13 16.277 2.797 23.785 4.946a244.63 244.63 0 0 1-2.395 12.89c-7.07-1.969-14.652-3.516-22.578-4.566Zm-1.504 13.011c.496-3.921.961-7.875 1.383-11.855 7.883 1.066 15.434 2.582 22.461 4.55a266.843 266.843 0 0 1-2.77 11.571c-6.617-1.848-13.671-3.277-21.074-4.266Zm-4.273 27.45a510.244 510.244 0 0 0 4.12-26.278c7.345.989 14.368 2.403 20.927 4.235a291.444 291.444 0 0 1-8.11 25.5c-5.308-1.489-10.996-2.645-16.937-3.457Zm6.347 27.93a93.661 93.661 0 0 0-11.93-2.465c1.9-7.149 3.72-15.399 5.387-24.31 5.868.798 11.477 1.938 16.727 3.395-3.203 8.567-6.676 16.485-10.184 23.38Zm11.18 4.19c-3.023-1.472-6.351-2.745-9.945-3.827 3.55-6.973 7.012-14.891 10.199-23.395 5.371 1.547 10.352 3.441 14.805 5.617a158.718 158.718 0 0 1-15.059 21.606Zm1.067.544a159.488 159.488 0 0 0 15.042-21.621c4.094 2.074 7.72 4.433 10.801 6.988-.09.117-.18.223-.27.344-5.507 7-11.613 13.46-18.038 19.156-2.164-1.79-4.692-3.426-7.535-4.867Zm-11.555-3.305c3.508 1.035 6.77 2.254 9.703 3.664-5.367 6.371-11.191 12.2-17.387 17.356a34.075 34.075 0 0 0-4.62-1.805c4.015-4.719 8.214-11.328 12.304-19.215Zm-12.922-2.734a87.985 87.985 0 0 1 11.691 2.386c-4.168 8.07-8.379 14.664-12.308 19.203a47.975 47.975 0 0 0-6.543-1.324c2.363-4.55 4.8-11.566 7.16-20.265Zm-13.84-.965c4.379.015 8.652.3 12.758.812-2.39 8.715-4.89 15.73-7.34 20.27a52.945 52.945 0 0 0-5.418-.317Zm-6.574 21.082c-2.45-4.54-4.95-11.555-7.324-20.27 4.062-.523 8.332-.797 12.726-.824v20.777a52.9 52.9 0 0 0-5.402.317Zm-7.79 1.473c-3.929-4.54-8.14-11.133-12.308-19.204a91.568 91.568 0 0 1 11.692-2.386c2.343 8.714 4.78 15.714 7.16 20.265-2.301.285-4.5.739-6.543 1.325Zm-5.855 2.164c-6.195-5.157-12.02-10.985-17.402-17.34 2.95-1.399 6.195-2.63 9.719-3.68 4.09 7.887 8.285 14.496 12.289 19.2-1.656.527-3.203 1.128-4.606 1.82Zm-19.254-17.73c-2.828 1.456-5.37 3.093-7.535 4.866a146.654 146.654 0 0 1-18.023-19.14c-.106-.121-.195-.243-.285-.36 3.054-2.527 6.695-4.855 10.816-6.941a159.25 159.25 0 0 0 15.027 21.574Zm11.012-4.356c-3.582 1.066-6.918 2.343-9.93 3.816a158.415 158.415 0 0 1-15.042-21.562c4.421-2.165 9.402-4.043 14.789-5.606 3.187 8.477 6.648 16.395 10.183 23.352Zm13.164-2.828a93.41 93.41 0 0 0-11.914 2.464c-3.508-6.894-6.965-14.812-10.172-23.363 5.223-1.441 10.817-2.582 16.715-3.394 1.668 8.894 3.488 17.144 5.371 24.292Zm14.125-25.63v24.641c-4.484.028-8.847.328-13.043.856-1.91-7.153-3.761-15.403-5.445-24.297 5.91-.766 12.11-1.172 18.488-1.2Zm0-27.722v26.55c-6.422.012-12.695.434-18.699 1.2-1.562-8.324-2.965-17.203-4.152-26.262 7.312-.945 14.968-1.457 22.851-1.488Zm0-13.117v11.945c-7.898.016-15.601.527-23 1.473-.511-3.907-.98-7.86-1.402-11.84a199.698 199.698 0 0 1 24.402-1.578Zm0-1.172c-8.41.016-16.636.555-24.52 1.578-.452-4.445-.859-8.91-1.19-13.313 8.214-1.066 16.835-1.636 25.71-1.667Zm1.172 0v-13.387c8.758.031 17.39.633 25.727 1.715a399.893 399.893 0 0 1-1.192 13.25c-7.883-1.023-16.11-1.563-24.535-1.578Zm0 13.117v-11.945c8.395.031 16.578.558 24.43 1.562-.418 3.98-.887 7.95-1.399 11.871a181.95 181.95 0 0 0-23.03-1.488Zm0 27.723V193.71c7.856.016 15.527.527 22.883 1.473a498.838 498.838 0 0 1-4.152 26.293 147.983 147.983 0 0 0-18.73-1.215Zm0 1.172c6.363.027 12.563.418 18.52 1.183-1.684 8.91-3.536 17.16-5.461 24.328a107.053 107.053 0 0 0-13.059-.87Zm-24.851 53.425c-7.22-3.921-14.442-9-21.286-14.98 2.106-1.695 4.602-3.274 7.43-4.7 5.371 6.368 11.18 12.184 17.348 17.383-1.293.692-2.469 1.458-3.492 2.297Zm45.054-2.296c6.184-5.184 11.992-11.016 17.348-17.383 2.797 1.425 5.277 3.004 7.398 4.746-6.843 5.949-14.035 11.027-21.254 14.949-1.023-.84-2.183-1.605-3.492-2.313Zm-8.527 25.945c-1.188-.27-2.332-.887-3.43-1.817a47.91 47.91 0 0 0 5.504-1.23c2.258.898 4.469 1.457 6.844 1.668-2.93.586-5.926 1.035-8.918 1.379Zm11.93-10.29c-4.485 4.493-13.993 7.391-24.192 7.391s-19.691-2.898-24.187-7.39c-1.746-1.746-2.633-3.606-2.633-5.516 0-7.137 12.035-12.937 26.82-12.937 10.2 0 19.707 2.918 24.192 7.41 1.757 1.742 2.644 3.605 2.644 5.527 0 1.91-.887 3.77-2.644 5.516ZM92.25 238.966c.063-3.606.98-7.106 2.648-10.485.286.508.575 1.004.887 1.516a114.39 114.39 0 0 0 14.746 19.02c-1.34 2.644-2.11 5.367-2.304 8.144-5.762-5.152-11.223-11.176-15.977-18.195Zm17.09 19.187c.078-2.84.785-5.59 2.062-8.234a121.517 121.517 0 0 0 20.504 16.707c-.949 1.895-1.476 3.832-1.61 5.816-6.948-3.668-14.14-8.367-20.956-14.289Zm27.515 26.7a21.343 21.343 0 0 1-2.98-3.664c8.02 2.898 16.055 4.687 23.215 5.496.406.765.918 1.488 1.547 2.21-6.496.286-13.567-.722-20.414-2.765-.465-.422-.946-.84-1.368-1.277Zm17.301 9.96a68.844 68.844 0 0 1-3.355-1.246c3.777.422 7.672.18 13.508-.496a29.339 29.339 0 0 0 4.21 1.79c-3.203 1.081-6.406 1.41-10.316 1.05h-.047a94.585 94.585 0 0 1-4-1.098Zm60.926 0c-1.324.391-2.648.754-3.988 1.098h-.031c-3.91.36-7.086.031-10.274-1.035a32.18 32.18 0 0 0 4.211-1.79c5.793.661 9.676.903 13.434.481-1.082.434-2.211.856-3.352 1.247Zm15.93-8.683c-6.844 2.043-13.903 3.05-20.367 2.766a13.403 13.403 0 0 0 1.546-2.211c7.133-.809 15.164-2.582 23.184-5.485a23.173 23.173 0 0 1-2.98 3.653c-.434.437-.918.855-1.383 1.277Zm7.925-13.672c-.117-2-.66-3.922-1.609-5.832 7.54-4.883 14.399-10.469 20.52-16.707 1.308 2.676 1.988 5.441 2.047 8.25-6.817 5.906-14.004 10.621-20.957 14.289Zm22.086-15.281c-.195-2.781-.964-5.5-2.316-8.145a113.863 113.863 0 0 0 14.773-19.035c.301-.512.586-1.008.887-1.516 1.684 3.41 2.57 6.926 2.617 10.516-4.754 7-10.199 13.027-15.96 18.18Zm17.059-19.88c-.285-3.425-1.293-6.76-2.992-10.019 1.832-3.199 3.52-6.445 4.992-9.75 1.852 3.711 2.797 7.496 2.844 11.387a97.86 97.86 0 0 1-4.844 8.383Zm-3.957-46.921c-4.453-3.77-9.777-7.195-15.781-10.23 1.55-8.086 2.41-16.079 2.511-23.754 6.247 3.168 11.707 6.773 16.25 10.726 0 7.137-.875 14.485-2.664 21.996-.09.422-.21.84-.316 1.262Zm-52.32-95.285c3.203 2.867 5.925 6.398 8.199 10.562-6.531-1.804-13.508-3.203-20.79-4.18-1.07-3.831-2.41-7.179-4.062-9.84 5.82.813 11.403 1.97 16.653 3.458Zm-74.403.043c5.25-1.488 10.86-2.66 16.696-3.485-1.653 2.66-2.977 6.008-4.047 9.825-7.281.992-14.262 2.39-20.79 4.18 2.243-4.118 4.95-7.65 8.141-10.52Zm-52.593 93.98c-1.774-7.511-2.649-14.875-2.664-22.011 4.5-3.891 9.96-7.48 16.25-10.668.117 7.617.96 15.523 2.496 23.543-6.02 3.023-11.344 6.418-15.813 10.171l-.27-1.035Zm-13.27 27.75c0-4.129 1.008-8.156 2.922-12.004 1.125 3.786 2.512 7.543 4.105 11.239-1.867 3.441-2.964 6.988-3.308 10.593a90.965 90.965 0 0 1-3.688-8.851 19.593 19.593 0 0 1-.03-.977Zm5.566 18.407a23.157 23.157 0 0 1-.644-3.622 93.848 93.848 0 0 0 4.602 7.633v.047c0 1.727.195 3.438.574 5.137a99.818 99.818 0 0 1-4.532-9.195Zm12.125 20.84a.596.596 0 0 0-.238-.165 103.527 103.527 0 0 1-4.5-6.656c-1.234-2.691-1.969-5.441-2.18-8.219 4.754 6.762 10.153 12.59 15.84 17.578.016 2.75.618 5.47 1.774 8.114-3.942-3.125-7.578-6.657-10.696-10.653Zm18.536 19.472c-1.551-1.473-2.903-2.992-4.032-4.555 5.79 3.922 12.051 7.063 18.383 9.496.871 1.641 2.047 3.215 3.535 4.766-4.843-1.668-9.492-3.848-13.691-6.46a125.516 125.516 0 0 1-4.195-3.247Zm133.718 0a113.11 113.11 0 0 1-4.316 3.32c-4.184 2.614-8.832 4.762-13.645 6.414 1.473-1.515 2.665-3.125 3.567-4.777 6.332-2.418 12.59-5.559 18.383-9.48-1.114 1.546-2.453 3.066-3.989 4.523Zm18.762-19.637a.494.494 0 0 0-.21.164c-3.13 4.012-6.786 7.543-10.727 10.684 1.156-2.66 1.757-5.379 1.773-8.129 5.688-4.988 11.086-10.82 15.84-17.55-.207 2.78-.961 5.515-2.18 8.202a107.427 107.427 0 0 1-4.496 6.63Zm7.356-11.48c.375-1.684.57-3.41.57-5.137a95.208 95.208 0 0 0 4.601-7.633 24.607 24.607 0 0 1-.628 3.59 105.416 105.416 0 0 1-4.543 9.18Zm4-94.688c-1.97-2.554-4.348-5.004-7.04-7.347a78.977 78.977 0 0 0-3.296-8.532c1.941 1.864 3.671 3.786 5.144 5.797 1.926 3.262 3.64 6.64 5.192 10.082Zm-32.555-37.199c-5.324-2.512-11.192-4.687-17.48-6.492-2.044-3.965-4.481-7.39-7.325-10.305a94.817 94.817 0 0 1 11.809 4.504c1.43.797 2.844 1.61 4.242 2.48 3.309 2.704 6.242 5.997 8.754 9.813ZM200.699 88.25c.676.543 1.309 1.16 1.926 1.879a153.354 153.354 0 0 0-17.422-1.067v-1.996c5.238.012 10.41.418 15.496 1.184Zm-16.668-1.2v2.013a153.49 153.49 0 0 0-17.406 1.082 13.532 13.532 0 0 1 1.926-1.895 107.119 107.119 0 0 1 15.48-1.2Zm-91.117 52.587a44.254 44.254 0 0 1 5.055-5.696 76.746 76.746 0 0 0-3.309 8.641c-2.738 2.36-5.101 4.852-7.07 7.406a106.382 106.382 0 0 1 5.324-10.351Zm-14.488 51.488c.195-2.957.886-5.86 2.062-8.684.39 6.957 1.578 13.899 3.489 20.735-1.954 3.594-3.114 7.289-3.473 11.09a106.948 106.948 0 0 1-2.106-21.125c0-.676.012-1.352.028-2.016Zm-1.836 1.762c0 .074.015.133.047.207 0 .015-.016.031-.016.047 0 28.8 11.238 55.89 31.637 76.265 20.398 20.375 47.508 31.582 76.36 31.582 59.51 0 107.937-48.336 107.995-107.758a.863.863 0 0 0 .075-.343c0-.95-.06-1.88-.149-2.813-.77-27.66-11.887-53.562-31.562-73.199-20.399-20.375-47.504-31.598-76.36-31.598-28.836 0-55.96 11.223-76.36 31.598-19.796 19.773-30.929 45.855-31.562 73.727a23.485 23.485 0 0 0-.105 2.285"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        d="M298.945 214.145c-1.636.136-2.691 1.234-2.36 2.433.333 1.219 1.927 2.09 3.567 1.953 11.461-.96 20.668-2.687 27-5.152 6.727-2.613 10.41-6.102 10.41-10.441 0-9.016-17.207-19.473-45.007-29.075-26.84-9.27-63.86-18.043-104.703-24.101-20.641-3.047-40.254-5.121-58.082-6.262-25.813-1.656-47.93-1.324-63.891.84-16.938 2.297-27.274 6.82-28.34 13.46-.059.391-.09.782-.09 1.157 0 3.742 2.797 7.648 7.973 11.602 4.98 3.77 12.23 7.66 21.348 11.507 1.503.633 3.324.317 4.058-.734.738-1.039.121-2.39-1.383-3.035-8.558-3.606-15.312-7.215-19.812-10.64-3.969-3.02-6.121-5.829-6.121-8.31 0-.238.031-.464.058-.66.754-4.671 9.465-8.05 23.89-10.003 15.403-2.106 36.978-2.391 62.31-.782 17.632 1.125 37.035 3.184 57.39 6.203 40.348 5.965 76.84 14.606 103.211 23.711 25.395 8.774 41.113 17.711 41.113 24.73 0 2.688-2.66 5.005-7.535 6.895-5.73 2.223-14.262 3.801-25.004 4.704"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        fillRule="evenodd"
        d="M296.133 82.813h.152c1.024 13.449 11.762 24.19 25.227 25.195v.168c-13.465 1.004-24.203 11.75-25.227 25.195h-.152c-1.024-13.445-11.762-24.191-25.227-25.195v-.168c13.465-1.004 24.203-11.746 25.227-25.195"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        fillRule="evenodd"
        d="M321.918 129.21h.074c.422 5.724 4.996 10.29 10.711 10.712v.074c-5.715.422-10.289 4.988-10.71 10.7h-.075c-.422-5.712-4.996-10.278-10.727-10.7v-.074c5.73-.422 10.305-4.988 10.727-10.711"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        stroke="none"
        strokeWidth={8.8046875}
        d="m104.887 181.281 24.867-2.332c.605-.058 1.035-.625.98-1.23l-.894-9.547a1.086 1.086 0 0 0-1.188-.984l-19.597 1.84a1.086 1.086 0 0 1-1.196-.985l-.859-9.145a1.09 1.09 0 0 1 .996-1.195l19.594-1.84c.605-.054 1.035-.62.98-1.226l-.894-9.54a1.081 1.081 0 0 0-1.188-.992l-24.87 2.333c-5.138.48-8.54 4.574-8.055 9.722l1.601 17.067c.48 5.144 4.586 8.535 9.723 8.054ZM141.238 178.348l10.57-.543c5.16-.266 8.723-4.215 8.458-9.375l-.883-17.121c-.266-5.16-4.215-8.723-9.375-8.454l-10.57.543c-5.153.266-8.723 4.215-8.458 9.375l.883 17.118c.266 5.164 4.227 8.722 9.375 8.457Zm4.774-10.32a1.082 1.082 0 0 1-1.157-1.032l-.652-12.668a1.089 1.089 0 0 1 1.043-1.156 1.083 1.083 0 0 1 1.145 1.043l.652 12.672a1.077 1.077 0 0 1-1.031 1.14ZM163.371 177.277l18.41-.25c5.168-.07 8.875-3.879 8.805-9.047l-.234-17.14c-.07-5.168-3.88-8.875-9.047-8.805l-18.41.25a1.088 1.088 0 0 0-1.086 1.117l.445 32.801c.012.61.496 1.082 1.117 1.074Zm12.984-10.234a1.085 1.085 0 0 1-1.113-1.074l-.172-12.688a1.083 1.083 0 0 1 1.086-1.113 1.079 1.079 0 0 1 1.102 1.082l.176 12.688a1.086 1.086 0 0 1-1.079 1.105ZM193.55 177.035l10.895.16a1.082 1.082 0 0 0 1.106-1.07l.488-32.805c.008-.62-.508-1.11-1.117-1.117l-10.89-.16a1.08 1.08 0 0 0-1.118 1.082l-.488 32.805c-.008.605.52 1.093 1.125 1.105ZM208.258 177.062l10.879.563a1.08 1.08 0 0 0 1.14-1.031l1.004-19.446a1.087 1.087 0 0 1 1.153-1.039c.609.032 1.062.543 1.03 1.153l-1 19.484c-.034.652.427 1.07 1.075 1.106l23.988 1.234a1.081 1.081 0 0 0 1.153-1.031l1.687-32.762a1.084 1.084 0 0 0-1.043-1.156l-10.922-.563a1.08 1.08 0 0 0-1.14 1.043l-1.02 19.738a1.078 1.078 0 0 1-1.152 1.032 1.077 1.077 0 0 1-1.031-1.14l1.015-19.786c.04-.703-.426-1.082-1.086-1.113l-23.972-1.235a1.08 1.08 0 0 0-1.157 1.04l-1.687 32.765c-.031.605.476 1.113 1.086 1.144ZM258.902 180.266l18.325 1.793c.574.058 1.144-.414 1.207-1.02l1.87-18.68c.06-.605-.417-1.136-1.03-1.195l-10.844-1.062c-.563-.055-1.133.418-1.192 1.023l-.722 6.926c-.059.605-.625 1.031-1.192.976a1.084 1.084 0 0 1-.988-1.191l.894-9.14a1.088 1.088 0 0 1 1.204-.989l13.05 1.277c.618.063 1.145-.414 1.207-1.02l.93-9.53a1.083 1.083 0 0 0-.984-1.204l-18.324-1.793c-5.133-.503-9.254 2.872-9.754 8.016l-1.672 17.059c-.504 5.144 2.883 9.254 8.015 9.754Zm0 0"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        d="m104.884 181.282 24.867-2.332c.61-.059 1.04-.625.985-1.235l-.895-9.539a1.088 1.088 0 0 0-1.191-.988l-19.598 1.84a1.088 1.088 0 0 1-1.191-.988l-.856-9.145a1.082 1.082 0 0 1 .985-1.191l19.597-1.836c.61-.059 1.04-.625.985-1.235l-.895-9.539a1.088 1.088 0 0 0-1.191-.988l-24.867 2.332c-5.141.485-8.536 4.578-8.051 9.719l1.598 17.07c.484 5.14 4.582 8.535 9.718 8.055ZM141.24 178.348l10.57-.547c5.156-.265 8.719-4.214 8.453-9.367l-.883-17.125c-.265-5.156-4.215-8.719-9.37-8.453l-10.571.543c-5.156.27-8.719 4.219-8.453 9.371l.883 17.125c.265 5.156 4.214 8.719 9.37 8.453Zm4.77-10.32a1.08 1.08 0 0 1-1.15-1.035l-.655-12.668a1.083 1.083 0 0 1 1.039-1.149 1.085 1.085 0 0 1 1.148 1.036l.652 12.668a1.083 1.083 0 0 1-1.035 1.148ZM163.369 177.277l18.414-.25c5.16-.07 8.87-3.883 8.8-9.043l-.234-17.145c-.07-5.16-3.883-8.87-9.043-8.8l-18.414.25a1.082 1.082 0 0 0-1.078 1.109l.445 32.8a1.08 1.08 0 0 0 1.11 1.079Zm12.984-10.235a1.086 1.086 0 0 1-1.11-1.082l-.171-12.683a1.084 1.084 0 0 1 1.078-1.106 1.08 1.08 0 0 1 1.11 1.078l.171 12.684a1.085 1.085 0 0 1-1.078 1.11ZM193.551 177.032l10.89.164a1.082 1.082 0 0 0 1.11-1.078l.488-32.8c.008-.614-.508-1.102-1.12-1.114l-10.891-.16a1.082 1.082 0 0 0-1.11 1.078l-.488 32.8c-.008.614.508 1.102 1.121 1.11ZM208.254 177.062l10.88.562a1.083 1.083 0 0 0 1.148-1.035l1-19.441c.03-.61.539-1.066 1.148-1.035a1.08 1.08 0 0 1 1.035 1.148l-1 19.485c-.035.652.426 1.07 1.078 1.105l23.985 1.234a1.083 1.083 0 0 0 1.148-1.035l1.688-32.761a1.083 1.083 0 0 0-1.036-1.149l-10.921-.562a1.08 1.08 0 0 0-1.149 1.035l-1.016 19.746a1.085 1.085 0 0 1-1.148 1.035 1.086 1.086 0 0 1-1.039-1.148l1.02-19.79c.039-.699-.426-1.074-1.082-1.109l-23.981-1.234a1.083 1.083 0 0 0-1.148 1.035l-1.688 32.766c-.031.609.469 1.117 1.078 1.148ZM258.903 180.268l18.328 1.793c.567.054 1.14-.418 1.2-1.028l1.87-18.672c.06-.609-.414-1.136-1.023-1.199l-10.844-1.058c-.562-.055-1.136.414-1.199 1.023l-.719 6.918c-.058.61-.629 1.04-1.195.984a1.082 1.082 0 0 1-.98-1.195l.894-9.144c.059-.61.586-1.04 1.195-.98l13.059 1.276c.61.059 1.14-.414 1.2-1.023l.933-9.535a1.086 1.086 0 0 0-.985-1.195l-18.328-1.793c-5.136-.504-9.246 2.875-9.746 8.011l-1.672 17.067c-.504 5.136 2.875 9.246 8.012 9.75Zm0 0" //code
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        stroke="none"
        strokeWidth={2.134479}
        d="m173.523 200.852-4.39.355-3.754-7.902-2.442 8.402-4.39.352L151.5 190l5.336-.43 3.793 7.715 2.734-8.238 3.325-.27 4.019 7.7 2.508-8.227 5.336-.43Zm0 0"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        stroke="none"
        strokeWidth={2.13446}
        d="m180.668 188.062 5.285-.085.2 12.593-5.282.086Zm0 0"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        stroke="none"
        strokeWidth={2.134479}
        d="m198.129 200.762-5.281-.149.265-9.476-4.93-.14.09-3.114 15.141.426-.086 3.113-4.93-.137ZM221.871 202.578l-5.262-.492.477-5.063-6.606-.62-.476 5.058-5.258-.492 1.18-12.54 5.258.493-.477 5.07 6.606.621.476-5.066 5.262.492Zm0 0"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        d="m173.52 200.854-4.39.36-3.75-7.891-2.437 8.39-4.39.344-7.063-12.047 5.343-.422 3.782 7.703 2.75-8.234 3.312-.266 4.016 7.688 2.5-8.219 5.344-.422ZM186.155 200.568l-5.282.094-.203-12.594 5.282-.093ZM198.126 200.755l-5.28-.14.265-9.47-4.922-.14.094-3.125 15.14.422-.094 3.125-4.937-.14ZM221.862 202.57l-5.266-.484.47-5.063-6.595-.625-.468 5.063-5.25-.5 1.187-12.531 5.25.5-.484 5.062 6.594.625.484-5.062 5.266.484Zm0 0" //with
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        stroke="none"
        strokeWidth={2.13446}
        d="m148.46 222.656-5.3-.73-.89-2.207-7.872-1.09-1.453 1.883-5.304-.735 9.707-11.363 4.859.672Zm-7.53-6.27-1.64-4.081-2.696 3.484Zm0 0"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        stroke="none"
        strokeWidth={2.134479}
        d="m155.469 223.2-5.262-.446 1.059-12.547 14.421 1.219-.261 3.101-9.156-.773-.168 1.969 7.738.656-.203 2.41-7.739-.652Zm0 0"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        stroke="none"
        strokeWidth={2.13446}
        d="m184.105 224.71-4.988-.17c-.219-.321-.367-.731-.441-1.228a5.644 5.644 0 0 0-.332-1.128c-.153-.372-.422-.688-.817-.942-.39-.258-.98-.406-1.77-.453l-3.429-.113-.125 3.629-5.281-.176.43-12.59 8.585.293c2.055.07 3.704.277 4.954.629 1.25.348 2.152.863 2.71 1.539.555.68.817 1.547.782 2.605-.031.883-.258 1.618-.676 2.207-.422.59-1.07 1.043-1.95 1.364.825.375 1.352.808 1.587 1.297.23.492.367 1.027.406 1.609.04.516.16 1.059.355 1.629Zm-11.671-7.14 3.015.094c.844.027 1.508.012 1.996-.047.489-.058.852-.152 1.086-.277.235-.121.387-.262.457-.422.07-.16.11-.324.114-.492a1.415 1.415 0 0 0-.079-.504c-.058-.164-.203-.317-.43-.457-.226-.14-.581-.254-1.062-.348-.484-.094-1.144-.152-1.988-.183l-3.02-.102Zm0 0"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        stroke="none"
        strokeWidth={2.134479}
        d="m186.305 212.027 5.285-.023.058 12.594-5.285.023ZM208.516 224.063l-14.543.562-.118-3.105 8.075-6.688-8.325.32-.117-3.101 14.54-.563.12 3.102-8.085 6.691 8.332-.324ZM230.578 222.16l-5.332.488-1.367-1.949-7.91.727-.992 2.16-5.332.488 6.875-13.265 4.886-.45Zm-8.758-4.398-2.523-3.606-1.84 4.004ZM246.844 219.742l-14.547 2.113-1.813-12.46 5.23-.762 1.364 9.383 9.317-1.356Zm0 0"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
        }}
        fill="none"
        d=""

      />
    </motion.svg>
  )
}

export function LogoSpotify({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 496 512"
      className={className}
    >
      <path
        stroke="none"
        d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
      />
    </svg>
  )
}

export function LogoDiscord({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 640 512"
      className={className}
    >
      <path
        stroke="none"
        d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91 483.689 483.689 0 0 0-119.688 37.107 1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375 487.666 487.666 0 0 0 146.825 74.189 1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126 251.047 251.047 0 0 0 9.109-7.137 1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233 234.533 234.533 0 0 0 9.132 7.16 1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241Z"
      />
    </svg>
  )
}
