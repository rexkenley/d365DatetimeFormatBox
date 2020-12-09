import React, { useState, useEffect } from "react";
import { Fabric } from "@fluentui/react/lib/Fabric";
import { Stack } from "@fluentui/react/lib/Stack";
import { DatePicker } from "@fluentui/react/lib/DatePicker";
import { MessageBar, MessageBarType } from "@fluentui/react/lib/MessageBar";
import format from "date-fns/format";
import isMatch from "date-fns/isMatch";
import parse from "date-fns/parse";

export interface IDatetimeFormatBoxProps {
  value: Date | null;
  formatString: string;
  disabled: boolean;
  required: boolean;
  hidden: boolean;
  onChange: (value: Date | null) => void;
}

const DatetimeFormatBox: React.FC<IDatetimeFormatBoxProps> = (props) => {
  const { value, formatString, onChange, disabled, hidden, required } = props,
    [date, setDate] = useState<Date | null>(),
    [hasError, setHasError] = useState<boolean>();

  useEffect(() => {
    setDate(value);
    setHasError(false);
  }, [value, formatString]);

  if (hidden) return <Fabric />;

  const onSelectDate = (dateValue: Date | null | undefined): void => {
      setDate(dateValue);
      onChange && onChange(dateValue || null);
    },
    onFormatDate = (dateValue?: Date): string => {
      if (dateValue) return format(dateValue, formatString);
      return "";
    },
    OnParseDateFromString = (dateString: string): Date | null => {
      if (isMatch(dateString, formatString)) {
        setHasError(false);
        return parse(dateString, formatString, new Date());
      }
      setHasError(true);
      return null;
    };

  return (
    <Fabric>
      <Stack tokens={{ childrenGap: 4 }}>
        <DatePicker
          allowTextInput
          onSelectDate={onSelectDate}
          formatDate={onFormatDate}
          parseDateFromString={OnParseDateFromString}
          disabled={disabled}
          isRequired={required}
          value={date || undefined}
        />
        {hasError && (
          <MessageBar
            messageBarType={MessageBarType.error}
            onDismiss={() => {
              setHasError(false);
            }}
            dismissButtonAriaLabel="Close"
          >
            Invalid entry. Please enter a value in {formatString} format
          </MessageBar>
        )}
      </Stack>
    </Fabric>
  );
};

export default DatetimeFormatBox;
