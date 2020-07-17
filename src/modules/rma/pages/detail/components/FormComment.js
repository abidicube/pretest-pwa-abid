import TextField from '@components/Forms/TextField';
import DropFile from '@components/DropFile';
import useStyles from './styles';

const FormComment = ({
    commentValue, t, handleGetBase64, fileAccept,
    handleChangeComment, dropValue, handleDrop,
}) => {
    const styles = useStyles();
    return (
        <>
            <div className={styles.block}>
                <TextField
                    name="message"
                    onChange={handleChangeComment}
                    value={commentValue}
                    placeholder={t('rma:form:placeholder:message')}
                    label={t('rma:form:label:message')}
                    multiline
                    rows={4}
                />
            </div>
            <div className={styles.block}>
                <DropFile
                    value={dropValue}
                    setValue={handleDrop}
                    label={t('rma:form:placeholder:uploadFile')}
                    getBase64={handleGetBase64}
                    acceptedFile={fileAccept}
                />
            </div>
        </>
    );
};

export default FormComment;
